import React, { Component } from 'react';
import AppNodeList from './components/appNoteList/appNoteList';
import AppAside from './components/appAside/appAside';
import AppAddNode from './components/appAddNote/appAddNote';
import AppNavbar from './components/appNavbar/appNavbar';

import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='main-container'>
        <AppNavbar />

        <AppAside />
        <AppAddNode />
        <AppNodeList />
      </div>
    );
  }
}

export default App;
