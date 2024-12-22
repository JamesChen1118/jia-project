import axios from 'axios';
import { getToken } from '@/utils/auth';

const server = axios.create({
    baseURL: import.meta.env.NODE_ENV === 'production'
    ? 'https://jia-flax.vercel.app/'
    : 'http://localhost:6001'
});

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