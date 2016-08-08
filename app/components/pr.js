'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import { Container, Header, Title, Content } from 'native-base';

var {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AlertIOS
} = ReactNative;

class PR extends Component{
  render() {
    return (
      <Container>
          <Content>
            <Text>pr content</Text>
          </Content>
      </Container>
    )
  }
}

var styles = StyleSheet.create({
 
})

module.exports = PR;