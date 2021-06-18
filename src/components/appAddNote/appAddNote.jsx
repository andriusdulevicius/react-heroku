import React, { Component } from 'react';
import './style.css';

class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onNewNote(this.state.newNote);
  };

  syncInput = (e) => {
    console.log(e.target.name);
    this.setState({ newNote: { ...this.state.newNote, [e.target.name]: e.target.value } });
  };

  render() {
    const { newNote } = this.state;
    return (
      <div className='add-note'>
        <form type='submit' onSubmit={this.handleSubmit}>
          <div className='form-expanded'>
            <input type='text' name='title' placeholder='Title' onChange={this.syncInput} value={newNote.title} />
            <textarea
              value={newNote.body}
              onChange={this.syncInput}
              name='body'
              placeholder='Take a note...'
            ></textarea>
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
      </div>
    );
  }
}

export default AppAddNote;
