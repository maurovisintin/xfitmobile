/* official */
import React, { Component, } from 'react'
import {Navigator} from 'react-native'

/* personal */
import PRScreen from './prScreen'

class PRNavigation extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
	}
  render() {
    return (
        <Navigator
            initialRoute={{ component: PRScreen}}
            renderScene={this.renderScene} />
     )
  }
}

export default PRNavigation
