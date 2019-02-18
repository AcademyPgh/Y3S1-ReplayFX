import React, { Component } from 'react';
import {Text, View, TouchableHighlight, TextInput} from 'react-native';
import { styles } from './styles';

export default class SwitchInput extends Component {
    render()
    {  
        return (this.props.isEditable ? (
            <TextInput style={this.props.editStyle} defaultValue={this.props.text} value={this.props.text} onChangeText={(text) => this.props.onChange(text)} />
            ) : (
            <TouchableHighlight onPress={this.props.onEditRequest}>
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableHighlight>
            ));
    }
}