import React, { Component } from 'react';
import Card from '../card/card';

class OneNote extends Component {
  state = {};
  render() {
    const { _id, title, body } = this.props.note;
    return (
      <Card onClick={() => this.props.onToggleModal(_id)}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Card>
    );
  }
}

export default OneNote;
