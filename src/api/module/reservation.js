import server from "../server";

export const reservationApi = {
    addReservation: async (reservation) => {
        try {
            await server.post("/reservation", reservation);
        } catch (err) {
            console.error(err);
        }
    },
    getReservations: async () => {
        try {
            const { data } = await server.get("/reservations");
            return data;
        } catch (err) {
            console.error(err);
        }
    },
    deleteReservation: async (id) => {
        try {
            await server.delete(`/reservation/${id}`);
        } catch (err) {
            console.error(err);
        }
    }
};

