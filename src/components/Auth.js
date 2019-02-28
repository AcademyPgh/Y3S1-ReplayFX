import {AsyncStorage} from 'react-native';
import Auth0 from 'react-native-auth0';
import { ClientId, Audience, Domain } from '../utils/AuthVars';

const auth0 = new Auth0({ domain: Domain, clientId: ClientId })

export const GetUserToken = (force) => {return new Promise((resolve, reject) => {
    AsyncStorage.getItem("credentials").then(credentials => {
        let creds = JSON.parse(credentials);
        console.log(creds);
        if(creds === null || creds.expiresOn === undefined || creds.expiresOn < Date.now())
        {
            force = true;
        }
        if(force === false)
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
                credentials.expiresOn = Date.now() + (credentials.expiresIn * 1000);
                AsyncStorage.setItem("credentials", JSON.stringify(credentials));
                resolve(credentials.idToken);
            })
            .catch(error => reject(error));
        }
    });        
})};

export const CheckUserToken = () => {return new Promise((resolve) => {
    AsyncStorage.getItem("credentials")
    .then(credentials => {
        const creds = JSON.parse(credentials);
        if(creds === null || creds.idToken === undefined)
        {
            resolve(null);
        }
        else
        {
            if(creds.expiresOn < Date.now())
            {
                resolve(null);
            }
            else
            {
                resolve(creds.idToken);
            }
        }
    })
    .catch((err) => {
        resolve(null);
    });
})}