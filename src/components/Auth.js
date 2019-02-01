import React from 'react';
import {Text} from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import { ClientId, Audience } from '../utils/AuthVars';

const auth0 = new Auth0({ domain: 'event-services.auth0.com', clientId: ClientId });

export default class Auth extends React.Component {
    state = {
        auth: {},
    }

    componentDidMount() {
        SInfo.getItem("accessToken", {}).then(accessToken => {
            if (accessToken) {
                this.props.withToken(accessToken);
                this.setState({
                    auth: true,
                    accessToken: accessToken
                })
            }
            else
            {
                auth0
                .webAuth
                .authorize({scope: 'openid profile email', audience: Audience})
                .then(credentials => {
                    console.log(credentials);
                    // Successfully authenticated
                    // Store the accessToken
                    SInfo.setItem("accessToken", credentials.accessToken, {});
                    SInfo.setItem("refreshToken", credentials.refreshToken, {});
                    this.setState({auth: true, accessToken: accessToken});
                })
                .catch(error => console.log(error));
            }
        });


    }

    render()
    {
        if (this.state.auth) {
            return <Text>{"Authenticated! " + JSON.stringify(this.state.accessToken)}</Text>;
        } else {
            return <Text>"Authenticating..."</Text>;
        }
    }
}
