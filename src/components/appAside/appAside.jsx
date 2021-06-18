import React, { Component } from 'react';

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className='aside'>
        <myLink href='/' icon='fa fa-pencil'>
          Home
        </myLink>
      </div>
    );
  }
}

export default AppAside;
