import server from "../server";
import { getToken } from "@/utils/auth";
import { userApi } from "./user";

export const reservationApi = {
    addReservation: async (reservationData) => {
        try {
            const token = getToken();
            const config = token ? {
                headers: { Authorization: `Bearer ${token}` }
            } : {};

            console.log('Sending reservation data:', reservationData);

            const currentUser = userApi.getCurrentUser();
            if (currentUser) {
                reservationData.userId = currentUser.id;
            }

            const { data } = await server.post("/reservations", reservationData, config);
            return data;
        } catch (error) {
            console.error('Reservation error:', error.response || error);
            throw error.response?.data?.message || '訂位失敗';
        }
    },

    getUserReservations: async () => {
        try {
            const token = getToken();
            if (!token) {
                throw new Error('請先登入');
            }

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const { data } = await server.get("/reservations/user", config);
            console.log("Fetched reservations:", data);
            return data;
        } catch (error) {
            console.error('Get reservations error:', error);
            throw error.response?.data?.message || '獲取訂位記錄失敗';
        }
    },

    checkTableAvailability: async (date, time, tableNo) => {
        try {
            const { data } = await server.get(`/reservations/check`, {
                params: { date, time, tableNo }
            });
            return data.available;
        } catch (error) {
            throw error.response?.data?.message || '檢查座位狀態失敗';
        }
    }
};