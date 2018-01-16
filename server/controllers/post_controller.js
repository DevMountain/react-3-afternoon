let posts = require('../data/posts.json');
const moment = require('moment');

let id = 1;

module.exports = {
  get: ( req, res, next ) => {
    res.status(200).send( posts );
  },

  put: ( req, res, next ) => {
    if ( !req.query.id || !req.body.text ) {
      res.status(409).send('Request is missing either required id in the query or text in the body.');
    } else {
      const { id } = req.query;
      const { text } = req.body;

      const post = posts.find( post => post.id == id );
      post.text = text;

      res.status(200).send( posts );
    }
  },

  post: ( req, res, next ) => {
    const date = moment().format('DD MMM YYYY');

    if ( !req.body.text ) {
      res.status(409).send('Request body missing required text');
    } else {
      const { text } = req.body;

      posts.unshift({ id, text, date });

      id++;

      res.status(200).send( posts );
    }
  },

  delete: ( req, res, next ) => {
    if ( !req.query.id ) {
      res.status(409).send('Request query is missing required id');
    } else {
      const { id } = req.query;

      const index = posts.findIndex( post => post.id == id );

      if ( index !== -1 ) {
        posts.splice( index, 1 );
      }

      res.status(200).send( posts );
    }
  },

  filter: ( req, res, next ) => {
    if ( !req.query.text ) {
      res.status(409).send('Request query is missing required text property.');
    } else {
      let { text } = req.query;
      text = text.toLowerCase();
      text = decodeURI( text );

      const filteredPosts = posts.filter( post => post.text.toLowerCase().includes( text ) );

      res.status( 200 ).send( filteredPosts );
    }
  }
};