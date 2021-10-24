const User = require('../models/User');
const { hash, compare } = require('bcrypt');

module.exports = {
  async index(req, res) {
    const users = await User.findAll({
      attributes: [ 
        'id',
        'email',
        'username',
        'avatar',
        'created_at'
      ],
    });

    return res.json(users);
  },

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findOne({
      where: { id },
      attributes: [
        'id',
        'email',
        'username',
        'avatar',
        'created_at'
      ],
    });

    return res.json(user);
  },

  async store(req, res) {
    const { email, password, username, avatar } = req.body;

    const hashedPassword = await hash(password, 8);

    await User.create({ 
      email,
      password: hashedPassword,
      username,
      avatar
    });

    return res.json(await User.findOne({
      where: { email }
    }));
  }
};