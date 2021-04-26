import axios from "axios";
import {
    getAccessToken,
    removeAccessToken
} from "../storage/token";
import {
    removeCustomerInfo
} from "../storage/info";

const API_URL =   process.env.SERVICE_URL ||  "http://localhost:5051/api";

async function postJson(url, req) {
    try {

        console.log(req);
        const headers = {
            'Content-Type': 'application/json',
        }

        const res = await axios.post(
            API_URL + url, req, {
                headers: headers
            }
        );

        return res;

    } catch (error) {
        return error.response;
    }
}

async function getParam(url, req) {

    try {
        const res = await axios.get(API_URL + url, {
            params: req
        });

        return res;

    } catch (error) {
        return error.response;
    }
}


async function getParamAuth(url, req) {

    try {

        const headers = {
            'Authorization': `Bearer ${getAccessToken()}`
        }


        const res = await axios.get(API_URL + url, {
            params: req,
            headers: headers
        });
    
        return res;

    } catch (error) {
        
        if(error.response?.status === 401){
            removeAccessToken();
            removeCustomerInfo();
            window.location.reload();
       }

        return error.response;
    }
}

async function postJsonAuth(url, req) {
    try {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`
        }

        const res = await axios.post(
            API_URL + url, req, {
                headers: headers
            }
        );
        return res;

    } catch (error) {

        if(error.response?.status === 401){
             removeAccessToken();
             removeCustomerInfo();
             window.location.reload();
        }

        return error.response;
    }
}

export {
    postJson,
    getParam,
    getParamAuth,
    postJsonAuth
}