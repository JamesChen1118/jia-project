import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import User from '../models/user.js';

const orderController = {
    createOrder: asyncHandler(async (req, res) => {
        const { items, totalAmount, paymentInfo } = req.body;
        const userId = req.user._id;

        const orderNumber = `JIA${Date.now()}`;

        const order = await Order.create({
            user: userId,
            orderNumber,
            items,
            totalAmount,
            paymentInfo: {
                cardNumber: paymentInfo.cardNumber.slice(-4),
                paymentStatus: 'completed',
                paymentDate: new Date()
            },
            status: 'processing'
        });

        await User.findByIdAndUpdate(userId, {
            $push: {
                orders: {
                    orderNumber: order.orderNumber,
                    date: order.createdAt,
                    amount: order.totalAmount,
                    status: order.status
                },
                history: items.map(item => ({
                    productName: item.name,
                    date: order.createdAt,
                    quantity: item.quantity,
                    amount: item.price * item.quantity
                }))
            }
        });

        res.status(201).json(order);
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        const orders = await Order.find({ user: req.user._id })
            .sort('-createdAt');
        res.json(orders);
    }),

    getOrderById: asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order && order.user.toString() === req.user._id.toString()) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error('Order not found');
        }
    })
};

export default orderController;