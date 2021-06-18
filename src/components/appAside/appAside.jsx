import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className='aside'>
        <MyLink active href='/' icon='home'>
          Home
        </MyLink>
        <MyLink href='/' icon='pencil'>
          Notes
        </MyLink>
        <MyLink href='/' icon='bell'>
          Reminders
        </MyLink>
        <MyLink href='/' icon='trash'>
          Trash
        </MyLink>
      </div>
    );
  }
}

export default AppAside;
