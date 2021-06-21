import React, { Component } from 'react';
import OneNote from '../common/oneNote/oneNote';

import './style.css';

class AppNoteList extends Component {
  state = {};
  render() {
    return (
      <div className='note-list'>
        {this.props.notes.map((n) => (
          <OneNote onToggleModal={this.props.onToggleModal} note={n} key={n._id} />
        ))}
      </div>
    );
  }
}

export default AppNoteList;
