import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Root from './app/containers/Root'

class Xfit extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('Xfit', () => Xfit);
