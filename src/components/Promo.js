import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

// TODO: Promo images will need to come from convention
export default class Promo extends Component {
    constructor(props){
        super(props);

        this.promos = this.props.promos.map(promo => {
            return (
                <TouchableOpacity onPress={() => this.props.displayEventById(promo.id)}>
                    <ScalableImage width={this.props.width}
                        style={this.props.styles.promoContainer}
                        source={{uri: promo.imageUrl}}
                    />
                </TouchableOpacity>
            )
        });
        this.value = Math.floor(Math.random() * this.promos.length);
    }

    render()
    {
        return this.promos[this.value];
    }
}

