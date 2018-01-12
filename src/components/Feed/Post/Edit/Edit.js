import React, { Component } from 'react';

import './Edit.css';

export default class Edit extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      text: props.text
    };

    this.onUpdate = this.onUpdate.bind( this );
  }

  updateText( value ) {
    this.setState({ text: value });
  }

  onUpdate() {

  }

  render() {
    return (
      <section className="Edit__parent">

        <textarea className="Edit__textarea" value={ this.state.text } onChange={ ( e ) => this.updateText( e.target.value ) }></textarea>

        <div className="Edit__controls">
          <button id="Edit__controls-update" 
                  className="Edit__control-btn"
                  onClick={ this.onUpdate }>
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