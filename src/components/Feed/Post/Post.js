import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';
import ReplyIcon from 'react-icons/lib/md/chat-bubble-outline';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';
import MessageIcon from 'react-icons/lib/md/mail-outline';
import MasterControlIcon from 'react-icons/lib/md/more-vert';

import './Post.css';

import Edit from './Edit/Edit';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      showMasterMenu: false
    }

    this.cancelEdit = this.cancelEdit.bind( this );
    this.showEdit = this.showEdit.bind( this );
    this.toggleMasterMenu = this.toggleMasterMenu.bind( this );
    this.hideMasterMenu = this.hideMasterMenu.bind( this );
  }

  showEdit() {
    this.setState({ editing: true, showMasterMenu: false });
  }

  cancelEdit() {
    this.setState({ editing: false });
  }

  toggleMasterMenu() {
    this.setState({ showMasterMenu: !this.state.showMasterMenu });
  }

  hideMasterMenu() {
    if ( this.state.showMasterMenu === true ) {
      this.setState({ showMasterMenu: false });
    }
  }

  render() {
    const { editing, showMasterMenu } = this.state;

    return (
      <section className="Post__parent" onClick={ this.hideMasterMenu }>

        <div className="Post__master-controls">
          <MasterControlIcon onClick={ this.toggleMasterMenu } />

          <div className="Post__master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
            <span onClick={ this.showEdit }>Edit</span>
            <span>Delete</span>
          </div>
        </div>

        <div className="Post__meta-data">
          <div className="Post__profile-picture">
            <ProfileIcon />
          </div>

          <span className="Post__name">DevMountain</span>
          <span className="Post__handle">@DevMountain</span>

          <span className="Post__date">- DATE GOES HERE</span>
        </div>

        <div className="Post__content">
          {
            editing
            ?
              <Edit text="Merry Christmas from DevMountain Provo!"
                    cancelFn={ this.cancelEdit } />
            :
              <span className="Post__text">POST TEXT GOES HERE</span>
          }
        </div>

        <div className="Post__user-controls">
          <ReplyIcon className="Post__control-icon" />
          <FavoriteIcon className="Post__control-icon" />
          <MessageIcon className="Post__control-icon" />
        </div>

      </section>
    )
  }
}