import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

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
        if (this.promos && this.promos.length > 0) {
            return this.promos[this.value];
        } else {
            return <View style={{flex: 0, width: 0, height: 0}} />;
        }
    }
}

