/* official */
import React, { Component, } from 'react'
import {Navigator} from 'react-native'

/* personal */
import SkillScreen from './skillScreen'

class SkillNavigation extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
	}
  render() {
    return (
        <Navigator
            initialRoute={{ component: SkillScreen}}
            renderScene={this.renderScene} />
     )
  }
}

export default SkillNavigation
