import React, {Component} from 'react';
import {StyleSheet, Modal, View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../utils/Fonts';
import { scale, verticalScale, moderateScale } from '../utils/Scaling';
import { goToConventionList } from '../utils/Navigation';

import SwitchConventionButton from './SwitchConventionButton';

export default class EmailModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userText: ""
        }

        this.sendPost = this.sendPost.bind(this);
    }
    
    sendPost() {
        // do things then call the roll up
        this.props.onSubmit()
    }
    
    render() {
        return (
                <Modal
                    style={styles.modal}
                    animationType="fade"
                    transparent={true}
                    visible={this.props.visible}
                    onRequestClose={this.props.onRequestClose}
                    >
                    <TouchableWithoutFeedback onPress={this.props.onRequestClose}>
                    <View style={styles.backdrop}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalBox}>
                            <Text style={styles.modalText}>Old School Gamer Con Companion is a Free app, but to keep it going and its companion magazine, we need you to sign up to get the Free Old School Gamera Magazine! Please put your email address in below and you get it FREE in your email inbox every issue.</Text>
                            <TextInput placeholder="email@address.com" style={styles.textBox} onChangeText={(text) => this.setState({userText: text})} value={this.state.userText} />

                            <View style={styles.modalButton}>
                                <TouchableOpacity style={styles.touchBox} onPress={this.sendPost}>
                                    <Text style={styles.modalText}>Free Magazine/Free App Submit</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </Modal>
        );
    }
}

//Container
//Splash Image
//Text
//Textbox
//OK button
//Close button

var styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#00000055"
    },
    modalContainer: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: verticalScale(58),
        marginRight: scale(8),
        marginLeft: scale(8),
        flex: 0,
    },
    modalBox: {
        backgroundColor: "black",
        borderRadius: 4,
        padding: 16,
    },
    modalButton: {
        backgroundColor: "red",
        borderRadius: 10,
        padding: 4,
        marginLeft: scale(16),
        marginRight: scale(16),
        alignItems: "center",
    },
    modalText: {
        color: "white",
        padding: 4
    },
    textBox: {
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: "white",
        margin: scale(16),
    },
})