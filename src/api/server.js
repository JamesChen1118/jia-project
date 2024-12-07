import axios from 'axios';

const server = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
        ? '/'  
        : '/api'  
});

export default server;