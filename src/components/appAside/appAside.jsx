import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className='aside'>
        <MyLink href='/' icon='fa fa-home'>
          Home
        </MyLink>
        <MyLink href='/' icon='fa fa-pencil'>
          Notes
        </MyLink>
        <MyLink href='/' icon='fa fa-bell'>
          Reminders
        </MyLink>
        <MyLink href='/' icon='fa fa-trash'>
          Trash
        </MyLink>
      </div>
    );
  }
}

export default AppAside;
