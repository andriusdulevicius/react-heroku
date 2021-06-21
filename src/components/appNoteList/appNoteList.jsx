import React, { Component } from 'react';
import OneNote from '../oneNote/oneNote';
import './style.css';

class AppNoteList extends Component {
  state = {};
  render() {
    return (
      <div className='note-list'>
        {this.props.notes.map((n) => (
          <OneNote toggleModal={this.props.toggleModal} targetedNote={n} title={n.title} body={n.body} key={n._id} />
        ))}
      </div>
    );
  }
}

export default AppNoteList;
