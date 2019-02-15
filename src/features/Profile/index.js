import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { styles } from './styles';
import {GetUserToken} from '../../components/Auth';
import Axios from 'axios';
import {getProfileURL} from '../../utils/API';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: "hi"
        };
    }

    componentDidMount() {
        GetUserToken
        .then(token => {
            this.setState({token});
            Axios.get(getProfileURL, { headers: { Authorization: `Bearer ${token}`}})
                .then((res) => {
                    this.setState({user: res.data});
                })
                .catch((err) => {
                    console.log(err);
                })
        });
    }

    render()
    {
        return (<View>
            {this.state.user && 
            <Text>{this.state.user.displayName}</Text>
            }
        </View>)
    }
}
