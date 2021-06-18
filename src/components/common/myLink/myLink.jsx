import React, { Component } from 'react';
import styles from './myLink.module.css';
class MyLink extends Component {
  state = {
    notes: [],
  };
  render() {
    return (
      <div className={styles.myLink}>
        <a href={this.props.href}>
          <i className={`fa fa-${this.props.icon}`}></i>
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default MyLink;
