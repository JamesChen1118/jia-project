import Reservation from "../models/reservation.js";
import asyncHandler from "express-async-handler";

const reservationController = {
    createReservation: asyncHandler(async (req, res) => {
        try {
            const { name, date, time, people, phone, tableId } = req.body;
            const reservation = await Reservation.create({
                name,
                date,
                time,
                people,
                phone,
                tableId
            });
            res.status(201).json(reservation);
        } catch (error) {
            console.error('Error in createReservation:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    getReservations: asyncHandler(async (req, res) => {
        try {
            const reservations = await Reservation.find({})
                .sort({ date: 1, time: 1 });
            res.json(reservations);
        } catch (error) {
            console.error('Error in getReservations:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    deleteReservation: asyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
            await Reservation.findByIdAndDelete(id);
            res.json({ message: 'Reservation deleted successfully' });
        } catch (error) {
            console.error('Error in deleteReservation:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default reservationController; 