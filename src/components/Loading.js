import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Fonts } from '../utils/Fonts';
import { scale, verticalScale, moderateScale } from '../utils/Scaling';

export default class Loading extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let debugData = null;
        this.debug = false;
        if (this.debug) {
            debugData = 
                <View style={{flex: 1}}>
                    <Text style={{color: 'white'}}>Props={JSON.stringify(this.props)}</Text>
                </View>;
        }

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>          
                <Text style={styles.text}>{this.props.err ? this.props.err : 'Loading...'}</Text>
                <View style={{flexDirection: "row"}}>
                {
                    this.props.onBack &&
                        <TouchableOpacity style={styles.button} onPress={this.props.onBack}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                }
                {
                    this.props.onRetry &&
                        <TouchableOpacity style={styles.button} onPress={this.props.onRetry}>
                            <Text style={styles.text}>Retry</Text>
                        </TouchableOpacity>
                }
                </View>
                {debugData}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        fontSize: scale(24),
        color: 'whitesmoke',
        fontFamily: Fonts.AvenirBlack,
    },
    button: {
        backgroundColor: 'black',
        borderColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth * 10,
        padding: scale(12),
        margin: scale(12),
        borderRadius: scale(12),
    }
});