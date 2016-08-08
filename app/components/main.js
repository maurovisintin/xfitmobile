'use strict';
import React, {Component} from 'react';
import ReactNative, {AsyncStorage} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import FacebookTabBar from './facebookTabBar';

var Dimensions = require('Dimensions');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  AlertIOS,
  Tabs
} = ReactNative;

import PRNavigation from "./prNavigation";
import SkillNavigation from "./skillNavigation";
import User from "./user";

class Main extends Component{

  render() {
    return (
        <ScrollableTabView
            locked={true}
            scrollWithoutAnimation={true}
            tabBarPosition="bottom"
            renderTabBar={() => <FacebookTabBar />}>
               <PRNavigation tabLabel="ios-home" tabIcon="whatshot" tabTitle="PR"/>
               <SkillNavigation tabLabel="ios-heart"  tabIcon="star" tabTitle="Skill"/>
               <User tabLabel="ios-person"  tabIcon="account-circle" tabTitle="User"/>
        </ScrollableTabView>
    )
  }
}

var styles = StyleSheet.create({
    test: {
      fontSize: 20,
      marginTop: 50
    }
})

export default Main;
