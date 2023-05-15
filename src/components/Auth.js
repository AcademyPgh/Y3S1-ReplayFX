import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth0 from 'react-native-auth0';
import { ClientId, Audience, Domain } from '../utils/AuthVars';

const auth0 = new Auth0({ domain: Domain, clientId: ClientId })

export const GetUserToken = (options) => {return new Promise((resolve, reject) => {
    AsyncStorage.getItem("credentials").then(credentials => {
        let {force, checkOnly, forceOnPrevLogon} = options;
        const creds = JSON.parse(credentials); // will be null if never set before
        const prevUser = !(creds === null || creds.expiresOn === null);
        console.log(creds);
        if(prevUser && forceOnPrevLogon === true)
        {
            force = true;
        }
        if(prevUser && creds.expiresOn < Date.now())
        {
            force = true;
        }
        if(force === false)
        {
            //console.log("Still logged in until " + creds.expiresOn);
            console.log("Login refresh not forced: ", creds);
            if(prevUser)
            {
                resolve(creds.idToken);
            }
            else
            {
                resolve(null);
            }
        }
        else if(checkOnly === true) // wasn't current user already
        {
            resolve(null);
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

export const CheckUserToken = (checkOnly) => {return new Promise((resolve) => {
    GetUserToken(checkOnly)
    .then(res => {resolve(res)});
})}