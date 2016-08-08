import React from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'
import { tokenAssign, tokenRemove } from '../actions/login'
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from '../components/login'

//containers are elements generated with connect function
//they manage the mapping of state and dispatches to props to child component
const mapStateToProps = (state) => {
  return {
    authToken: state.authToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (token) => {
        dispatch(tokenAssign('testtoken'))
    },
    onLogoutClick: () => {
        dispatch(tokenRemove())
    }
  }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer
