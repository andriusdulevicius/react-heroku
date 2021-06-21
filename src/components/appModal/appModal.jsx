import React, { Component } from 'react';
import './style.css';

class AppModal extends Component {
  state = {};
  render() {
    const { note, toggleModal } = this.props;
    return (
      <div onClick={toggleModal} className='modal-bgc'>
        <div key={note._id} className='modal-note'>
          <h3>{note.title}</h3>
          <h4>{note.body}</h4>
        </div>
      </div>
    );
  }
}

export default AppModal;
