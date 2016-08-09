import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Dimensions,
    AsyncStorage,
    Picker,
    TextInput
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import t from 'tcomb-form-native';
import {create} from 'apisauce';
import Spinner from 'react-native-loading-spinner-overlay';

import XfitApi from '../common/apiconfig.js'

const windowSize = Dimensions.get('window');

export default class PRAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            error: false,
            skills: [],
            measure: "Kg",
            skill: '',
            value: 0,
            user: ''
        };
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })
        AsyncStorage.getItem('UserData', (err, result) => {
            if (result) {
                console.log(result)
                this.setState({
                    user: JSON.parse(result).id
                })
            }
        })
        XfitApi
        .get('/skill')
        .then((response) => {
            this.setState({
                isLoading: false,
                skills: response.data
            })
            console.log(response.data)
        })
    }
    submitPR = () => {
        this.setState({
            isLoading: true
        })
        const postData = {
            measure: this.state.measure,
            skill: this.state.skill,
            value: this.state.value,
            user: this.state.user
        }
        XfitApi
        .post('/pr', postData)
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                Alert.alert(
                    'Errore',
                    'L\'aggiunta del pr non è andata a buon fine',
                    [
                        {text: 'OK'},
                    ]
                )
            } else {
                Alert.alert(
                    'Successo',
                    'Il PR è stato aggiunto con successo',
                    [
                        {text: 'OK', onPress: () => {
                            this.props.navigator.pop()
                        }},
                    ]
                )
                ;
            }
            this.setState({
                isLoading: false
            })
        })
    }
    render() {
        return (
            <View>
                <NavigationBar
                    title={{ title : 'Add PR'}}
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
                            <Text>Skill</Text>
                            <Picker
                                onValueChange={(value) => this.setState({skill: value})}
                                selectedValue={this.state.skill}>
                                {this.state.skills.map((skill, i) => <Picker.Item label={skill.name} value={skill._id} key={i} />)}
                            </Picker>
                            <Text>Value (Kg)</Text>
                            <TextInput
                                keyboardType="numeric"
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({value : text})}
                                />

                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={ this.submitPR.bind(this) }>
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
