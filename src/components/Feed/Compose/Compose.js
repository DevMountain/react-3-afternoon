import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Compose.css';

export default class Compose extends Component {
  render() {
    return (
      <section className="Compose__parent">
        <div className="Compose__top">

          <div className="Compose__profile-picture">
            <ProfileIcon />
          </div>

          <input className="Compose__input" placeholder="What's on your mind?" />

        </div>

        <div className="Compose__bottom">
          <button>Compose</button>
        </div>
      </section>
    )
  }
}