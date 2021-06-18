import React, { Component } from 'react';

import './style.css';

class AppAddNode extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('siusti');
  };

  render() {
    return (
      <div className='add-note'>
        <form type='submit' onSubmit={this.handleSubmit}>
          <div className='form-expanded'>
            <input type='text' name='title' placeholder='Title' />
            <textarea name='body' placeholder='Take a note...'></textarea>
            <div className='icon-links'>
              <a href='/' icon='check'>
                <i className='fa fa-check'></i>
              </a>
              <a href='/' icon='pencil'>
                <i className='fa fa-pencil'></i>
              </a>
              <a href='/' icon='image'>
                <i className='fa fa-image'></i>
              </a>
            </div>
            <button type='submit'>Close</button>
          </div>
        </form>
        {/* <form onSubmit={this.handleSubmit} action='submit' className='form-collapsed'>
          <input type='text' placeholder='Take a note...' />
          <a href='/' icon='check'>
            <i className='fa fa-check'></i>
          </a>
          <a href='/' icon='pencil'>
            <i className='fa fa-pencil'></i>
          </a>
          <a href='/' icon='image'>
            <i className='fa fa-image'></i>
          </a>
        </form> */}
      </div>
    );
  }
}

export default AppAddNode;
