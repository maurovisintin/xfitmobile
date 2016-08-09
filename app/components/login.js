import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    TextInput,
    Image
} from 'react-native';
import { connect } from 'react-redux'

import Dimensions from 'Dimensions';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome'

import Main from './main'
import XfitApi from '../common/apiconfig.js'

const windowSize = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'onitsuka90@gmail.com',
            password: 'pass',
            isLogging: false,
            loggedIn: false
        };
        this.getUserData = this.getUserData.bind(this)
    }
    getUserData () {
        AsyncStorage.getItem('UserData', (err, result) => {
            if (result) {
                this.setState({
                    loggedIn: true
                })
            }
        })
    }
    componentWillMount(){
        this.getUserData()
    }
    renderLoginPage(){
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading} />
                <Image style={styles.bg} source={require('../common/img/loginbg.png')} />
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
                <TouchableOpacity
                    style={styles.signin}
                    onPress={() => this.login()}>
                    <Text style={styles.whiteFont}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.signup}>
                    <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
                </View>
            </View>
        )

    }
    login() {
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
    render() {
        if (this.state.loggedIn) {
            return (
                <Main />
            );
        } else {
            return this.renderLoginPage()
        }
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
