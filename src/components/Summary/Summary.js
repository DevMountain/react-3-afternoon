import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';

import './Summary.css';

export default class Summary extends Component {
  componentWillReceiveProps( newProps ) {
    console.log('hit');
  }

  render() {
    console.log( this.props );
    return (
      <section className="Summary__parent">
        <div className="Summary__image" />

        <div className="Summary__meta-data">
          <div className="Summary__profile-picture">
            <ProfileIcon />
          </div>

          <div className="Summary__text">
            <span className="Summary__name">DevMountain</span>
            <span className="Summary__handle">@DevMountain</span>
          </div>
        </div>

        <div className="Summary__statistics">
          <div className="Summary__posts">
            <span className="Summary__posts-label">Posts</span>
            <span className="Summary__posts-value">{ this.props.count }</span>
          </div>
        </div>
      </section>
    )
  }
}