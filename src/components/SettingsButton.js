import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SettingsModal from './SettingsModal';

export default class SettingsButton extends Component {
    state = {
        modalVisible: false,
    }

    closeModal = () => {
        this.setState({modalVisible: false});
    }

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    render() {
        if(this.props.singleConvention === true){
            return(null)
        }
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SettingsModal visible={this.state.modalVisible} onRequestClose={this.closeModal} />
                <TouchableOpacity onPress={this.toggleModal}>
                    <Icon name='ellipsis-h' size={36} color='#f3f3f3' />
                </TouchableOpacity>
            </View>
        );
    }
}