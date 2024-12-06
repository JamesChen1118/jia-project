import server from "../server";
import { getToken } from "@/utils/auth";

export const orderApi = {
    addOrder: async (orderData) => {
        try {
            const token = getToken();
            if (!token) {
                throw new Error('請先登入');
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            console.log('Sending order data:', orderData);
            const response = await server.post("/orders", orderData, config);
            console.log('Order response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Order creation error:', error.response?.data || error);
            throw error;
        }
    },

    getOrders: async () => {
        try {
            const token = getToken();
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await server.get("/orders", config);
            return response.data;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    }
};