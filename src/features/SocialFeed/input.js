import React, { Component } from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {userText: ""};

        this.sendPost = this.sendPost.bind(this);
    }

    sendPost(){
        console.log("Posting?");
        this.props.post(this.state.userText);
        this.setState({userText: ""});
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.textBox} onChangeText={(text) => this.setState({userText: text})} value={this.state.userText} />
                <TouchableOpacity style={styles.touchBox} onPress={this.sendPost}>
                    <Icon name="location-arrow" size={40} color='blue' />
                </TouchableOpacity>
            </View>);
    }
}