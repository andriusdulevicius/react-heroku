import React, { Component } from 'react';

import './style.css';

class Modal extends Component {
  handleCardClick = (event) => {
    // kad paspaudimas ant korteles nereaguotu i paspaudima ant fono
    event.stopPropagation();
  };

  render() {
    return (
      <div onClick={this.props.onToggleModal} className='main-modal'>
        <div onClick={this.handleCardClick} className='modal-card'>
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.body}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
