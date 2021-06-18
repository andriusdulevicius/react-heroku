import React, { Component } from 'react';
import './style.css';

class AppNavbar extends Component {
  state = {};
  render() {
    return (
      <header className='main-nav'>
        <a href='/'>
          <strong>Keep</strong>Clone
        </a>
        <div className='search'>
          <input type='search' placeholder='Search' />
        </div>
        <div>
          <i className='fa fa-pencil'></i>
        </div>
      </header>
    );
  }
}

export default AppNavbar;
