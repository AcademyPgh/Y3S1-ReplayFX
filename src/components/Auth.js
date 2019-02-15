import {AsyncStorage} from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import { ClientId, Audience, Domain } from '../utils/AuthVars';

const auth0 = new Auth0({ domain: Domain, clientId: ClientId })

export const GetUserToken = new Promise((resolve, reject) => {
    AsyncStorage.getItem("accessToken").then(accessToken => {
        if (accessToken !== null && false) {
            resolve(accessToken);
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
                AsyncStorage.setItem("accessToken", credentials.idToken);
                AsyncStorage.setItem("refreshToken", credentials.accessToken);
                resolve(credentials.idToken);
            })
            .catch(error => reject(error));
        }
    });
});
