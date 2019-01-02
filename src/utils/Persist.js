import {AsyncStorage} from 'react-native';

export const persistPrefix = "@OSGCA:";

export function getConventionPersistKey(conventionID) {
    return persistPrefix + "[" + conventionID + "]";
}

export function persistData(key, data) {
    data = JSON.stringify(data);
    if (data) {
        AsyncStorage.setItem(key, data);
    } 
    else console.log('not set, stringify failed:', key, data);
}