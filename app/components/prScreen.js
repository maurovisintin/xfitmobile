/* official */
import React, { Component } from 'react';
import {View, StyleSheet, ScrollView, Dimensions } from 'react-native';

/* 3rd party */
import NavigationBar from 'react-native-navbar';

/* personal */
import PRList from './prList'
import XfitApi from '../common/apiconfig.js'
import PRAdd from './prAdd'

const windowSize = Dimensions.get('window');

export default class PRScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
        pr: {
            isLoading: false,
            items: []
        }
      };
    }
    componentDidMount () {
      this.setState({
          pr: {
              isLoading: true
          }
      })
      XfitApi
        .get('/pr')
        .then((response) => {
          this.setState({
              pr: {
                  isLoading: false,
                  items: response.data
              }
          })
          console.log(response.data)
      })
    }

    render() {
        return (
          <View>
            <NavigationBar
              title={{ title : 'PR'}}
              tintColor='#f7f7f7'
              rightButton={{
                    title: 'Add',
                    handler: () => this.props.navigator.push({
                      component: PRAdd
                    })
              }} />
            <ScrollView style={styles.scrollContainer}>
                <PRList
                    navigator={this.props.navigator}
                    isLoading={this.state.pr.isLoading}
                    dataSource={this.state.pr.items}/>
            </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: windowSize.height - 110
    },
});
