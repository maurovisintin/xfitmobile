'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {create} from 'apisauce'
import { Container, Header, Title, Content, Spinner } from 'native-base';
import XfitApi from '../common/apiconfig.js'

var Home = require('../home/home')

import Dimensions from 'Dimensions';
import Animated from 'Animated';
const windowSize = Dimensions.get('window');

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

class Login extends Component{
  state = {
    username: 'onitsuka90@gmail.com',
    password: 'pass',
    isLogging: false,
    loggedIn: false
  }
  render() {
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
  }
  login() {
    console.log("asd")
    this.setState({
        isLogging: true,
    });
      XfitApi
        .post('/login', {
            "email": this.state.username,
            "password": this.state.password
        })
        .then((response) => {
            this.setState({
                isLogging: false,
            });
            if(!response.data.error)
            {
                AsyncStorage.setItem('UserData', JSON.stringify(response.data), (res) => { console.log(res) });
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
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
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

module.exports = Login;
