import React from 'react';
import {Text} from 'react-native';

import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'event-services.auth0.com', clientId: 'd5M70OQqxt8z4tjjiCzroltq5XrF9XOa' });

// TODO: Promo images will need to come from convention
export default class Auth extends React.Component {
    state = {
        auth: {},
    }

    componentDidMount() {
        auth0
            .webAuth
            .authorize({scope: 'openid profile email', audience: 'https://event-services.auth0.com/userinfo'})
            .then(credentials => {
                console.log(credentials);
                // Successfully authenticated
                // Store the accessToken
                this.setState({auth: credentials});
            })
            .catch(error => console.log(error));
    }

    render()
    {
        if (this.state.auth) {
            return <Text>{"Authenticated! " + JSON.stringify(this.state.auth)}</Text>;
        } else {
            return <Text>"Authenticating..."</Text>;
        }
    }
}
