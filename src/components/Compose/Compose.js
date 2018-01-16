import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Compose.css';

export default class Compose extends Component {
  constructor() {
    super();
    
    this.state = {
      text: ''
    };

    this.createPost = this.createPost.bind( this );
  }

  updateText( text ) {
    this.setState({ text });
  }

  createPost() {

  }

  render() {
    const { text } = this.state;

    return (
      <section className="Compose__parent">
        <div className="Compose__top">

          <div className="Compose__profile-picture">
            <ProfileIcon />
          </div>

          <input className="Compose__input"
                 placeholder="What's on your mind?"
                 value={ text }
                 onChange={ ( e ) => this.updateText( e.target.value ) } />

        </div>

        <div className="Compose__bottom">
          <button onClick={ this.createPost }>Compose</button>
        </div>
      </section>
    )
  }
}