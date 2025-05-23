import axios from 'axios';
import { BASE_URL, TOKEN_LOCAL_STORAGE } from '../utils/constants';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(TOKEN_LOCAL_STORAGE);
        if (token) {
            config.headers = config.headers || {};
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log('Request headers:', config.headers);
        return config;
    },
    (error) => Promise.reject(error)
);
