import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// 14. To render a nested route, include {this.props.children}
