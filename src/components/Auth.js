import {AsyncStorage} from 'react-native';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import { ClientId, Audience, Domain } from '../utils/AuthVars';

const auth0 = new Auth0({ domain: Domain, clientId: ClientId })

export const GetUserToken = new Promise((resolve, reject) => {
    AsyncStorage.getItem("credentials").then(credentials => {
        let creds = JSON.parse(credentials);
        console.log(creds);
        if(creds && creds.expiresOn && creds.expiresOn > Date.now())
        {
            console.log("Still logged in until " + creds.expiresOn);
            resolve(creds.idToken);
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
                credentials.expiresOn = Date.now() + credentials.expiresIn;
                AsyncStorage.setItem("credentials", JSON.stringify(credentials));
                resolve(credentials.idToken);
            })
            .catch(error => reject(error));
        }
    });        
});
