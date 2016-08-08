import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
  AsyncStorage
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import t from 'tcomb-form-native';
import {create} from 'apisauce';
import Spinner from 'react-native-loading-spinner-overlay';

import XfitApi from '../common/apiconfig.js'

const windowSize = Dimensions.get('window');
const Form = t.form.Form;


const options = {
    fields: {
      name: {
        label: 'Nome',
        help: ''
      }
  }
};

const Skill = t.struct({
  name: t.String
});


export default class SkillAdd extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: false,
        error: false
      };
    }
    submitSkill = () => {
        var value = this.refs.form.getValue();
        if (value) {
            this.setState({
              isLoading: true
            })
            XfitApi
                .post('/skill', value)
                .then((response) => {
                    console.log(response)
                    if (!response.ok) {
                        Alert.alert(
                         'Errore',
                         'La creazione della skill non è andata a buon fine',
                         [
                           {text: 'OK'},
                         ]
                       )
                   } else {
                       Alert.alert(
                         'Successo',
                         'La skill è stata aggiunta con successo',
                         [
                           {text: 'OK', onPress: () => this.props.navigator.pop()},
                         ]
                       )
                      ;
                   }
                    this.setState({
                      isLoading: false
                    })
                })
        }
  }
  render() {
    return (
        <View>
            <NavigationBar
              title={{ title : 'Add Skill'}}
              tintColor='#f7f7f7'
              leftButton={
                  {
                    title: 'Back',
                    handler: () => this.props.navigator.pop()
                  }
              } />
          <ScrollView  style={styles.scrollContainer}>
            <Spinner visible={this.state.isLoading} />
            <View style={styles.formContainer}>
                <Form ref="form" type={Skill} value={this.state.value} options={options} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={ this.submitSkill.bind(this) }>
              <Text style={styles.buttonText}>
                Submit
              </Text>
            </TouchableOpacity>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
      padding: 20
  },
  scrollContainer: {
      height: windowSize.height - 110,
      backgroundColor: 'white'
  },
  button: {
    width: windowSize.width,
    height: 50,
    borderRadius: 0,
    backgroundColor: '#4267b2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
});
