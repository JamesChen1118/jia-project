import server from "../server";
import { getToken } from "@/utils/auth";

export const reservationApi = {
    addReservation: async (reservationData) => {
        try {
            const token = getToken();
            const config = token ? {
                headers: { Authorization: `Bearer ${token}` }
            } : {};

            const { data } = await server.post("/reservations", reservationData, config);
            return data;
        } catch (error) {
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
            return data;
        } catch (error) {
            throw error.response?.data?.message || '獲取訂位資料失敗';
        }
    },

    // 檢查座位是否可用
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