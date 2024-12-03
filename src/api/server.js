import axios from 'axios';

const server = axios.create({
    baseURL: '/api',  // 這裡保持不變
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default server;