import axios from 'axios';


const api = axios.create({
    baseURL: 'https://alterdata-cmv-api.herokuapp.com/'
});
export default api;