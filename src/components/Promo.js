import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

// TODO: Promo images will need to come from convention
export default class Promo extends Component {
    constructor(props){
        super(props);

        this.promos = [
            <TouchableOpacity onPress={() => this.props.displayEventById(332)}>
                <ScalableImage width={this.props.width}
                    style={this.props.styles.promoContainer}
                    source={require('../../Images/tiny-goldeneye.jpg')}
                />
            </TouchableOpacity>,
            <TouchableOpacity onPress={() => this.props.displayEventById(375)}>
                <ScalableImage width={this.props.width}
                    style={this.props.styles.promoContainer}
                    source={require('../../Images/blood-drive.jpg')}
                />
            </TouchableOpacity>,
            <TouchableOpacity onPress={() => this.props.displayEventById(398)}>
                <ScalableImage width={this.props.width}
                    style={this.props.styles.promoContainer}
                    source={require('../../Images/klask-promo.jpg')}
                />
            </TouchableOpacity>,
            <TouchableOpacity onPress={() => this.props.displayEventById(359)}>
                <ScalableImage width={this.props.width}
                    style={this.props.styles.promoContainer}
                    source={require('../../Images/cosplay-contest.jpg')}
                />
            </TouchableOpacity>,
            <TouchableOpacity onPress={() => this.props.displayEventById(338)}>
                <ScalableImage width={this.props.width}
                    style={this.props.styles.promoContainer}
                    source={require('../../Images/steel-samurai.jpg')}
                />
            </TouchableOpacity>
        ]
        this.value = Math.floor(Math.random() * this.promos.length);
    }

    render()
    {
        return this.promos[this.value];
    }
}

