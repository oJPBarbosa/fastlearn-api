const express = require('express');

const auth = require('./middlewares/auth');

const CommentController = require('./controllers/CommentController');
const CommunityController = require('./controllers/CommunityController');
const PathController = require('./controllers/PathController');
const PostController = require('./controllers/PostController');
const SubscriptionController = require('./controllers/SubscriptionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get(
  '/communities/:community_id/posts/:id/comments',
  auth,
  CommentController.index
);
routes.get(
  '/communities/:community_id/posts/:id/comments/:id',
  auth,
  CommentController.show
);
routes.post(
  '/communities/:community_id/posts/:id/comments',
  auth,
  CommentController.store
);

routes.get('/communities', auth, CommunityController.index);
routes.get('/communities/:id', CommunityController.show);
routes.post('/communities', CommunityController.store);

routes.get('/communities/:community_id/paths', auth, PathController.index);
routes.get(
  '/communities/:community_id/paths/:path_id',
  auth,
  PathController.show
);
routes.post('/communities/:community_id/paths', auth, PathController.store);

routes.get('/communities/:community_id/posts', auth, PostController.index);
routes.get('/communities/:community_id/posts/:id', auth, PostController.show);
routes.post('/communities/:community_id/posts', auth, PostController.store);

routes.get('/users/subscriptions', auth, SubscriptionController.index);
routes.get('/users/:user_id/subscriptions', auth, SubscriptionController.show);
routes.post(
  '/users/:user_id/subscriptions',
  auth,
  SubscriptionController.store
);

routes.get('/users', auth, UserController.index);
routes.get('/users/:id', auth, UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;
