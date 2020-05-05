import React, { Component } from 'react';
import Header from './Header';
// import Profile from '../components/Profile';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer></footer>
      </div>
    );
  }
}
