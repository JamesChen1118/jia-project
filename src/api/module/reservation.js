import server from "../server";
import { getToken } from "@/utils/auth";
import { userApi } from "./user";

// API 函數定義
const addReservation = async (reservationData) => {
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

        const { data } = await server.post("/api/reservations", reservationData, config);
        return data;
    } catch (error) {
        console.error('Reservation error:', error.response || error);
        throw error.response?.data?.message || '訂位失敗';
    }
};

const getReservations = async () => {
    try {
        const token = getToken();
        if (!token) {
            throw new Error('請先登入');
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const { data } = await server.get("/api/reservations/user", config);
        console.log("Fetched reservations:", data);
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Get reservations error:', error);
        throw error.response?.data?.message || '獲取訂位記錄失敗';
    }
};

const checkTableAvailability = async (date, time, tableNo) => {
    try {
        const { data } = await server.get(`/api/reservations/check`, {
            params: { date, time, tableNo }
        });
        return data.available;
    } catch (error) {
        throw error.response?.data?.message || '檢查座位狀態失敗';
    }
};

const reservationApi = {
    createReservation: addReservation,
    getUserReservations: getReservations,
    checkTableAvailability
};

export {
    addReservation as createReservation,
    getReservations as getUserReservations,
    checkTableAvailability
};

export { reservationApi };

export default reservationApi;