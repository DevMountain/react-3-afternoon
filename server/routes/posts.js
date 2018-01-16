const Router = require('express').Router();
const postController = require('../controllers/post_controller');

Router.get('/', postController.get);
Router.put('/', postController.put);
Router.post('/', postController.post);
Router.delete('/', postController.delete);

module.exports = Router;