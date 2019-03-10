import {GetUserToken} from '../components/Auth';
import axios from 'axios';
import {getConventionDataURL} from './API';

export async function loadConvention (convention) {
    let token = await GetUserToken({force: false});
    let headers = null;
    if(token)
    {
        headers = { Authorization: 'Bearer ' + token };
    }
    let results = await axios.get(getConventionDataURL(convention), {headers, timeout: 10000});
    return results.data;
}
