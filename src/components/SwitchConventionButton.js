import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { Fonts } from '../utils/Fonts';
import { scale, verticalScale, moderateScale } from '../utils/Scaling';
import { goToConventionList } from '../utils/Navigation';
import NavigationService from '../utils/NavigationService';

export default class SwitchConventionButton extends Component {
    handlePress = () => {
        goToConventionList(NavigationService.getNavigator());
        if (this.props.onPress) {
            this.props.onPress();
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <View style={styles.button}><Text style={styles.font}>Switch Convention</Text></View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    font: {
        color: '#f3f3f3',
        fontSize: scale(22),
        fontFamily: Fonts.NunitoLight,
    },
    button: {
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
})