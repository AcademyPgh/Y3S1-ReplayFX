import {GetUserToken} from '../components/Auth';
import axios from 'axios';
import {getConventionDataURL} from './API';

export async function loadConvention (convention, getUser) {
    let headers = null;
    if(getUser) 
    {
        let token = await GetUserToken({force: false});
        if(token)
        {
            headers = { Authorization: 'Bearer ' + token };
        }
    }
    let results = await axios.get(getConventionDataURL(convention), {headers, timeout: 10000});
    return results.data;
}
