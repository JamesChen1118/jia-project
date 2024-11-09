import axios from "axios";

const API_URL = "http://localhost:1999/api";

export const userApi = {
    login: async (username, password) => {
        const { data } = await axios.post(`${API_URL}/users/login`, {
            username,
            password,
        });
        return data;
    },
    register: async (userData) => {
        const { data } = await axios.post(`${API_URL}/users/register`, userData);
        return data;
    },
    getCart: async (userId) => {
        const { data } = await axios.get(`${API_URL}/cart/${userId}`);
        return data;
    },
    updateCart: async (cartId, items) => {
        const { data } = await axios.put(`${API_URL}/cart/${cartId}`, { items });
        return data;
    }
};
