import React, { Component } from 'react';
import AppNoteList from './components/appNoteList/appNoteList';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNavbar from './components/appNavbar/appNavbar';
import AppModal from './components/appModal/appModal';

import './App.css';

class App extends Component {
  state = {
    notes: [],
    counter: 1,
    isModalOn: false,
  };

  handleNewNote = (newNote) => {
    let newObj = { ...newNote, _id: this.state.counter, isPinned: false };
    const notesCopy = [...this.state.notes];
    notesCopy.push(newObj);

    this.setState({ notes: notesCopy, counter: this.state.counter + 1 });
  };

  toggleModal = () => {
    this.setState({ isModalOn: !this.state.isModalOn });
  };
  targetedNote = (n) => {
    return n;
  };

  render() {
    return (
      <div className='main-container'>
        <AppNavbar />

        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList notes={this.state.notes} toggleModal={this.toggleModal} targetedNote={this.targetedNote} />
        {this.state.isModalOn && <AppModal toggleModal={this.toggleModal} note={this.targetedNote}></AppModal>}
      </div>
    );
  }
}

export default App;
