import React, { Component, } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Dimensions} from 'react-native'

const windowSize = Dimensions.get('window');

class User extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
 onPressButton () {
   Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
  )
 }
  render() {
    var url = 'https://res.cloudinary.com/oreegano/image/upload/c_fill,g_center,q_auto/v1459416577/n7nxnc0yjekxxl6mrgkj.jpg';
    return (
        <View  style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
            style={styles.profileImg}
            source={{uri: url}}/>
          </View>
          <Text style={styles.profileName}>Username</Text>
          <View>
            <Text>cose</Text>
          </View>
        </View>
    )
  }
}

const HEIGHT = 50;

var styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: HEIGHT / 2,
    // borderWidth: 1 / PixelRatio.get(),
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  lightbox: {
    flex: 1,
  },
  carousel: {
   height: windowSize.width - 10 * 2,
   width: windowSize.width - 10 * 2,
   backgroundColor: 'white',
 },
  imgContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileName: {
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: "700"
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    width: 150
  },
  border: {
    borderWidth: 1,
    borderColor: '#7F91A7',
    borderRadius: HEIGHT / 2,
  },
  primaryButton: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'grey',
  },
  icon: {
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: "700"
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: '#7F91A7',
  }
});


export default User
