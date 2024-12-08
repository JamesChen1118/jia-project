import axios from 'axios';

const server = axios.create({
    baseURL: '/'
});

export default server;