import axios from 'axios';

const server = axios.create({
    baseURL: '/api',  // 修改這裡，使用相對路徑
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default server;