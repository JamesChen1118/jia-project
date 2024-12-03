import axios from 'axios';

const server = axios.create({
    baseURL: '/api',  // 保持這個設定
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 添加請求攔截器，用於調試
server.interceptors.request.use(
    config => {
        console.log('Request:', config.method.toUpperCase(), config.url);
        return config;
    }
);

export default server;