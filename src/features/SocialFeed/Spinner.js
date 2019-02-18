import React, { Component } from 'react';
import {View, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Spinner extends Component {
    constructor (props) {
        super(props);
        this.spinValue = new Animated.Value(0);

        this.spin = this.spin.bind(this);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin());
    }

    render () {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const size = this.props.size ? this.props.size : 45;

        return (
            <Animated.View
            style={{
                transform: [{rotate: spin}],
                position: 'relative',
                height: size,
                width: size
            }}>
                <Icon name="spinner" size={size} containerStyle={{ position: 'absolute', top: 0, left: 0 }} />
            </Animated.View>
        )
    }
}