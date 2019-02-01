import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { styles } from './styles';
import Auth from '../../components/Auth';

export default class Profile extends Component {

    render()
    {
        return (<View>
            <Auth />
            <Text>Working?</Text>
        </View>)
    }
}
