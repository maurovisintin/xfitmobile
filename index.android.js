import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Root = require('./app/containers/Root');

var Xfit = React.createClass({
  render: function() {
    return (
        <Root />
    );
  }
});

AppRegistry.registerComponent('Xfit', () => Xfit);
