/* official */
import React, { Component, } from 'react'
import { View, Text, StyleSheet, Image, Alert, ScrollView, Dimensions, TouchableHighlight} from 'react-native'

/* 3rd party */
import NavigationBar from 'react-native-navbar';
const windowSize = Dimensions.get('window');

export default class SkillDetail extends Component {
  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
            title={{ title : 'Event Detail'}}
            tintColor='#f7f7f7'
            leftButton={{
                title: 'Back',
                handler: () => this.props.navigator.pop()
              }} />
          <View style={styles.content}>
              <Text>
                  {this.props.data.name}
              </Text>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});
