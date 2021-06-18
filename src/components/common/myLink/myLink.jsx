import React, { Component } from 'react';
import styles from './myLink.module.css';
class MyLink extends Component {
  state = {};
  render() {
    return (
      <div className={styles.myLink}>
        <a href={this.props.href}>
          <i className={`fa fa-${this.props.icon}`}></i>
          <span>{this.props.children}</span>
        </a>
      </div>
    );
  }
}

export default MyLink;
