import asyncHandler from 'express-async-handler';
import Reservation from '../models/reservation.js';
import User from '../models/user.js';

const reservationController = {
    createReservation: asyncHandler(async (req, res) => {
        const { name, date, time, people, tableNo, phone } = req.body;

        try {
            const reservation = await Reservation.create({
                name,
                date,
                time,
                people,
                tableNo,
                phone,
                user: req.user ? req.user._id : null,
                status: 'pending'
            });

            if (req.user) {
                await User.findByIdAndUpdate(req.user._id, {
                    $push: {
                        reservations: {
                            reservationId: reservation._id,
                            date: reservation.date,
                            time: reservation.time,
                            tableNo: reservation.tableNo,
                            status: reservation.status
                        }
                    }
                });
            }

            res.status(201).json(reservation);
        } catch (error) {
            res.status(400);
            throw new Error('無法建立訂位');
        }
    }),

    checkTableAvailability: asyncHandler(async (req, res) => {
        const { date, time, tableNo } = req.query;

        try {
            // 檢查該時段是否已有訂位
            const existingReservation = await Reservation.findOne({
                date: new Date(date),
                time,
                tableNo,
                status: { $ne: 'cancelled' }  // 不包括已取消的訂位
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
        const reservations = await Reservation.find({ user: req.user._id })
            .sort('-date');
        res.json(reservations);
    }),

    getAllReservations: asyncHandler(async (req, res) => {
        const reservations = await Reservation.find({})
            .populate('user', 'username')
            .sort('-date');
        res.json(reservations);
    }),

    updateReservation: asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { status } = req.body;

        const reservation = await Reservation.findById(id);
        if (!reservation) {
            res.status(404);
            throw new Error('找不到訂位資料');
        }

        reservation.status = status;
        const updatedReservation = await reservation.save();

        if (reservation.user) {
            await User.updateOne(
                {
                    _id: reservation.user,
                    'reservations.reservationId': reservation._id
                },
                {
                    $set: {
                        'reservations.$.status': status
                    }
                }
            );
        }

        res.json(updatedReservation);
    })
};

export default reservationController;