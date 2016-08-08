/* official */
import React, { Component } from 'react';
import {View, StyleSheet, ScrollView, Dimensions } from 'react-native';

/* 3rd party */
import NavigationBar from 'react-native-navbar';

/* personal */
import SkillList from './skillList'
import XfitApi from '../common/apiconfig.js'
import SkillAdd from './skillAdd'

const windowSize = Dimensions.get('window');

export default class SkillScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
        skill: {
            isLoading: false,
            items: []
        }
      };
    }
    componentDidMount () {
      this.setState({
          skill: {
              isLoading: true
          }
      })
      XfitApi
        .get('/skill')
        .then((response) => {
          this.setState({
              skill: {
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
              title={{ title : 'Skill'}}
              tintColor='#f7f7f7'
              rightButton={{
                    title: 'Add',
                    handler: () => this.props.navigator.push({
                      component: SkillAdd
                    })
              }} />
            <ScrollView style={styles.scrollContainer}>
                <SkillList
                    navigator={this.props.navigator}
                    isLoading={this.state.skill.isLoading}
                    dataSource={this.state.skill.items}/>
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
