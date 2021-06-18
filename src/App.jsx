import React, { Component } from 'react';
import AppNoteList from './components/appNoteList/appNoteList';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNavbar from './components/appNavbar/appNavbar';

import './App.css';

class App extends Component {
  state = {
    notes: [],
    counter: 1,
  };

  handleNewNote = (newNote) => {
    let newObj = { ...newNote, _id: this.state.counter, isPinned: false };
    const notesCopy = [...this.state.notes];
    notesCopy.push(newObj);

    this.setState({ notes: notesCopy });
  };
  render() {
    return (
      <div className='main-container'>
        <AppNavbar />

        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
