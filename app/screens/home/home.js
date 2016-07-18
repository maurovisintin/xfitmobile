'use strict';

import React from 'react';
import ReactNative from 'react-native';

var Dimensions = require('Dimensions');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AlertIOS
} = ReactNative;

var Home = React.createClass({
  render: function() {
    return (
        <View>
            <Text>Forgot Password</Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
    
})

module.exports = Home;