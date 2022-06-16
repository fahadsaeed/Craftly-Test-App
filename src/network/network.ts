import axios from "axios";

const  baseURL = 'https://craftly.free.beeceptor.com/';

const headers = {
    "Access-Control-Request-Method": "GET, POST, OPTIONS, PATCH",
    "Access-Control-ALLOW-ORIGIN": "*",
    "Content-Type": "application/json"
}


const getAPI = (url: any) => axios({
    method : 'GET',
    url: baseURL + url,
    headers
})



export default getAPI;