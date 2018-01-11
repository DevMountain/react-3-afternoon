let posts = require('../data/posts.json');

module.exports = {
  get: ( req, res, next ) => {
    res.status(200).send( posts );
  },

  put: ( req, res, next ) => {

  },

  post: ( req, res, next ) => {

  },

  delete: ( req, res, next ) => {

  }
}