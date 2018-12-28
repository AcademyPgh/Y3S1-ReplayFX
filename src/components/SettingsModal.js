import React, {Component} from 'react';
import {StyleSheet, Modal, View, Text, Button, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import { Fonts } from '../utils/Fonts';
import { scale, verticalScale, moderateScale } from '../utils/Scaling';
import { goToConventionList } from '../utils/Navigation';

import SwitchConventionButton from './SwitchConventionButton';

export default class SettingsModal extends Component {
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
                                <SwitchConventionButton onPress={this.props.onRequestClose}/>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                </Modal>
        );
    }
}

var styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: "#00000055"
    },
    modalContainer: {
        flexDirection: 'column',
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: verticalScale(58),
        marginRight: scale(8),
        flex: 0,
    },
    modalBox: {
        backgroundColor: "black",
        borderRadius: 4,
        padding: 4,
    },
})