/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var LoginScreen = require('./app/screens/login/login1');

var Xfit = React.createClass({
  render: function() {
    return (
        <LoginScreen />
    );
  }
});


AppRegistry.registerComponent('Xfit', () => Xfit);