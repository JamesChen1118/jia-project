import asyncHandler from 'express-async-handler';
import Reservation from '../models/reservation.js';

const reservationController = {
    createReservation: asyncHandler(async (req, res) => {
        const { name, date, time, people, tableNo, phone, email } = req.body;
        const userId = req.user?._id;

        try {
            const existingReservation = await Reservation.findOne({
                date: new Date(date),
                time,
                tableNo,
                status: { $ne: 'cancelled' }
            });

            if (existingReservation) {
                res.status(400);
                throw new Error('此座位已被預訂');
            }

            const reservationData = {
                name,
                date,
                time,
                people,
                tableNo,
                phone,
                email,
                status: 'pending'
            };

            if (userId) {
                reservationData.user = userId;
            }

            const reservation = await Reservation.create(reservationData);
            res.status(201).json(reservation);
        } catch (error) {
            console.error('Reservation error:', error);
            res.status(400);
            throw new Error(error.message || '建立訂位失敗');
        }
    }),

    checkTableAvailability: asyncHandler(async (req, res) => {
        const { date, time, tableNo } = req.query;

        try {
            const existingReservation = await Reservation.findOne({
                date: new Date(date),
                time,
                tableNo,
                status: { $ne: 'cancelled' }
            });

            res.json({
                available: !existingReservation,
                message: existingReservation ? '此座位已被預訂' : '座位可用'
            });
        } catch (error) {
            res.status(500);
            throw new Error('檢查座位狀態失敗');
        }
    }),

    getUserReservations: asyncHandler(async (req, res) => {
        try {
            console.log('Fetching reservations for user:', req.user._id);
            const reservations = await Reservation.find({
                user: req.user._id,
                status: { $ne: 'cancelled' }
            }).sort('-date');

            console.log('Found reservations:', reservations);
            res.json(reservations);
        } catch (error) {
            console.error('Error in getUserReservations:', error);
            res.status(500);
            throw new Error('獲取訂位記錄失敗');
        }
    })
};

export default reservationController;