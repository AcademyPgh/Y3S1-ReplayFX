import React, { Component } from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import { styles } from './styles';
import {GetUserToken} from '../../components/Auth';
import {getProfileURL} from '../../utils/API';
import { scale } from '../../utils/Scaling';
import { homeButtonHeader } from '../../utils/Headers';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchInput from './SwitchInput';

export default class Profile extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const homeButton = homeButtonHeader(navigation);
        return {
          ...homeButton,
          headerTitleStyle: {
            ...navigationOptions.headerTitleStyle,
            fontSize: scale(25)
          },
        };
      }
    
    constructor(props){
        super(props);
        this.state = {
            token: "hi",
            attempts: 0
        };

        this.saveChanges = this.saveChanges.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    getProfile()
    {
        GetUserToken(false)
        .then(token => {
            fetch(getProfileURL, { headers: { Authorization: `Bearer ${token}`}})
                .then((res) => {
                    if (res.status == 200)
                    {
                        this.setState({attempts: 0});
                        return res.json();
                    }
                    else if (res.status == 401)
                    {
                        if(this.state.attempts > 2)
                        {
                            throw new Error('Unauthorized, token refresh failed');
                        }
                        this.setState({attempts: this.state.attempts + 1});
                        GetUserToken(true)
                        .then(() => {
                            this.getProfile();
                        });
                        throw new Error('Unauthorized, forcing token refresh');
                    }
                    else
                    {
                        console.log(res);
                        throw new Error('API Call failed!');
                    }
                })
                .then((res) => {
                    this.setState({...res, original: res});
                })
                .catch((err) => {
                    console.log(err);
                })
        });
    }

    componentDidMount() {
        this.getProfile();
    }

    updateInput(value)
    {
        this.setState(value);
    }

    saveChanges()
    {
        GetUserToken(false)
        .then(token => {
            fetch(getProfileURL, { 
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    //post: {
                        displayName: this.state.displayName,
                        name: this.state.name
                    //}
                })
            })
            .then((res) => {
                this.setState({readyToPost: true});
                console.log(res);
                if (res.status == 200)
                {
                    this.setState({attempts: 0});
                    return res.json();
                }
                else if (res.status == 401)
                {
                    if(this.state.attempts > 2)
                    {
                        throw new Error('Unauthorized, token refresh failed');
                    }
                    this.setState({attempts: this.state.attempts + 1});
                    GetUserToken(true)
                    .then(() => {
                        this.saveChanges();
                    });
                    throw new Error('Unauthorized, forcing token refresh');
                }
                else
                {
                    console.log(res);
                    throw new Error('API Call failed!');
                }
            })
            .then((res) => {
                console.log(res);
                this.setState({displayNameEdit: false, nameEdit: false, ...res, original: res});
            })
            .catch((err) => {
                console.log(err);
            })
        });

    }

    cancelChanges()
    {
        this.setState({displayNameEdit: false, nameEdit: false, ...this.state.original})
    }

    render()
    {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Display Name <Icon style={styles.title} name="unlock"/></Text>
            <SwitchInput 
                onChange={(value) => this.setState({displayName: value})}
                text={this.state.displayName} 
                textStyle={styles.text}
                editStyle={styles.editText}
                isEditable={this.state.displayNameEdit}
                onEditRequest={() => this.setState({displayNameEdit: true})}
            />
            <Text style={styles.title}>Full Name <Icon style={styles.title} name="unlock"/></Text>
            <SwitchInput 
                onChange={(value) => this.setState({name: value})}
                text={this.state.name} 
                textStyle={styles.text} 
                editStyle={styles.editText}
                isEditable={this.state.nameEdit}
                onEditRequest={() => this.setState({nameEdit: true})}
            />
            <Text style={styles.title}>Email <Icon style={styles.title} name="lock"/></Text>
            <Text style={styles.text}>{this.state.email}</Text>
            <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={this.cancelChanges}><Icon name="times-circle" size={45} color="#d66" /></TouchableHighlight>
                <TouchableHighlight onPress={this.saveChanges}><Icon name="check" size={45} color="#6d6" /></TouchableHighlight>
            </View>
            <View style={styles.keyboardPadding}></View>
        </View>)
    }
}
