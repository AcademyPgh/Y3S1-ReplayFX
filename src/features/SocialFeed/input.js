import React, { Component } from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {userText: ""};
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TextInput style={styles.textBox} onChangeText={(text) => this.setState({userText: text})} value={this.state.userText} />
                <TouchableOpacity onPress={() => this.props.post(this.state.userText)}>
                    <Icon name="home" size={40} color='blue' />
                </TouchableOpacity>
            </View>);
    }
}