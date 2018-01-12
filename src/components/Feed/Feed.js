import React, { Component } from 'react';
import Post from './Post/Post';
import Compose from './Compose/Compose';

import './Feed.css';

export default class Feed extends Component {
  render() {
    return (
      <section className="Feed__parent">

        <Compose createPostFn={ this.props.createPostFn } />
        
        {
          this.props.posts.map( post => (
            <Post key={ post.id }
                  text={ post.text }
                  date={ post.date }
                  id={ post.id }
                  updatePostFn={ this.props.updatePostFn }
                  deletePostFn={ this.props.deletePostFn } />
          ))
        }

      </section>
    )
  }
}