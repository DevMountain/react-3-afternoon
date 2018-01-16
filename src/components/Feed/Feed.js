import React, { Component } from 'react';
import Post from './Post/Post';
import Compose from './Compose/Compose';

import './Feed.css';

export default class Feed extends Component {
  render() {
    const { posts, createPostFn, updatePostFn, deletePostFn } = this.props;
    
    return (
      <section className="Feed__parent">

        <Compose createPostFn={ createPostFn } />
        
        {
          posts.map( post => (
            <Post key={ post.id }
                  text={ post.text }
                  date={ post.date }
                  id={ post.id }
                  updatePostFn={ updatePostFn }
                  deletePostFn={ deletePostFn } />
          ))
        }

      </section>
    )
  }
}