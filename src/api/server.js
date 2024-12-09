import axios from 'axios';
import { getToken } from '@/utils/auth';

const server = axios.create({
    baseURL: '/'
});

// 請求攔截器
server.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default server;