import React, { Component } from 'react';
import AppNodeList from './components/appNoteList/appNoteList';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNavbar from './components/appNavbar/appNavbar';

import './App.css';

class App extends Component {
  state = {
    notes: [],
  };

  handleNewNote = (newNote) => {
    console.log('adding new note', newNote);
    this.setState({ notes: this.state.notes.push({ newNote }) });
  };
  render() {
    return (
      <div className='main-container'>
        <AppNavbar />

        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNodeList />
      </div>
    );
  }
}

export default App;
