'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import { Container, Header, Title, Content, List, ListItem } from 'native-base';
import {create} from 'apisauce'

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

var Dimensions = require('Dimensions');
import XfitApi from '../common/apiconfig.js'

class Skill extends Component{
    state = {
        skills: []
    }
    getSkills() {
        XfitApi
        .get('/skill', {})
        .then((response) => {
            this.setState({
                skills: response.data
            });
        })
    }

    componentDidMount () {
        this.getSkills();
    }
    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
            <Container >
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text style={styles.default}>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    default: {
        color: '#DDD'
    }
})

module.exports = Skill;
