import React, { Component } from 'react';

import './Edit.css';

export default class Edit extends Component {
  render() {
    return (
      <section className="Edit__parent">

        <textarea className="Edit__textarea" value={ this.props.text } onChange={ () => '' }></textarea>

        <div className="Edit__controls">
          <button id="Edit__controls-update" 
                  className="Edit__control-btn">
            Update
          </button>

          <button id="Edit__controsl-cancel"
                  className="Edit__control-btn"
                  onClick={ this.props.cancelFn }>
            Cancel
          </button>
        </div>

      </section>
    )
  }
}