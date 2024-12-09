import asyncHandler from 'express-async-handler';
import Reservation from '../models/reservation.js';
import User from '../models/user.js';

export const createReservation = asyncHandler(async (req, res) => {
    const { name, date, time, people, tableNo, phone, email } = req.body;
    const userId = req.user?._id;

    try {
        const reservation = await Reservation.create({
            name,
            date,
            time,
            people,
            tableNo,
            phone,
            email,
            user: userId
        });

        if (userId) {
            await User.findByIdAndUpdate(userId, {
                $push: { reservations: reservation._id }
            });
        }

        res.status(201).json(reservation);
    } catch (error) {
        console.error('Create reservation error:', error);
        res.status(400);
        throw new Error(error.message || '建立訂位失敗');
    }
});

export const getUserReservations = asyncHandler(async (req, res) => {
    try {
        if (!req.user?._id) {
            res.status(401);
            throw new Error('請先登入');
        }

        const reservations = await Reservation.find({
            user: req.user._id
        })
            .select('date time people tableNo')
            .sort('-date')
            .lean();

        console.log('Found reservations:', reservations);
        res.json(reservations);
    } catch (error) {
        console.error('Get reservations error:', error);
        res.status(500);
        throw new Error('獲取訂位記錄失敗');
    }
});

export default {
    createReservation,
    getUserReservations
};