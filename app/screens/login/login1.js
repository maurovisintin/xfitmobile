'use strict';

import React from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {create} from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://xfit-be.herokuapp.com/v1',
  headers: {'Accept': 'application/json'}
})

var Home = require('../home/home')

// var React = require('react-native');
var Dimensions = require('Dimensions');
var Animated = require('Animated');
var windowSize = Dimensions.get('window');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AlertIOS
} = ReactNative;

var Login1 = React.createClass({
  getInitialState: function() {
    return {
      username: '',//onitsuka90@gmail.com',
      password: '', //pass',
      loggedIn: false
    }
  },
  render: function() {
    if (this.state.loggedIn) {
        return (
          <Home/>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('./loginbg.png')} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={{uri: '.'}} />
                </View>
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.inputUsername} name="user" size={20} color="#fff" />
                        <TextInput 
                            style={[styles.input, styles.whiteFont]}
                            onChangeText={(username) => this.setState({username})}
                            placeholder="Username"
                            placeholderTextColor="#FFF"
                            value={this.state.username}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.inputPassword} name="lock" size={20} color="#fff" />
                        <TextInput
                            password={true}
                            style={[styles.input, styles.whiteFont]}
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Password"
                            placeholderTextColor="#FFF"
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.forgotContainer}>
                        <Text style={styles.greyFont}>Forgot Password</Text>
                    </View>
                </View>
                <View style={styles.signin}>
                    <Text style={styles.whiteFont}
                        onPress={() => this.login()}>
                        Sign In
                    </Text>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
                </View>
            </View>
        );
    }
  },
  login: function () {
      api
        .post('/login', {
            "email": this.state.username,
            "password": this.state.password
        })
        .then((response) => {
            if(!response.data.error)
            {
                this.setState({
                    loggedIn: true,
                });
            } else {
                AlertIOS.alert(
                'Attention',
                'Wrong credentials'
                );
            }
        })
  }
});

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})

module.exports = Login1;