import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import User from '../models/user.js';

const orderController = {
    createOrder: asyncHandler(async (req, res) => {
        const { orderItems, paymentInfo, totalPrice } = req.body;
        const userId = req.user._id;

        try {
            const orderNumber = `JIA${Date.now()}`;
            const order = await Order.create({
                user: userId,
                orderNumber,
                orderItems,
                paymentInfo,
                totalPrice,
                status: 'completed',
                date: new Date()
            });

            await User.findByIdAndUpdate(userId, {
                $push: {
                    orders: {
                        orderNumber,
                        date: new Date(),
                        amount: totalPrice,
                        status: 'completed'
                    },
                    history: orderItems.map(item => ({
                        productName: item.name,
                        date: new Date(),
                        quantity: item.numbers,
                        amount: item.price * item.numbers
                    }))
                }
            });

            res.status(201).json(order);
        } catch (error) {
            res.status(400);
            throw new Error(error.message || '建立訂單失敗');
        }
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        try {
            const orders = await Order.find({ user: req.user._id })
                .select('orderNumber date totalPrice status orderItems')
                .sort('-date')
                .lean();

            const safeOrders = orders.map(order => ({
                _id: order._id,
                orderNumber: order.orderNumber,
                date: order.date,
                totalPrice: order.totalPrice,
                status: order.status,
                orderItems: Array.isArray(order.orderItems) ? order.orderItems : []
            }));

            res.json(safeOrders);
        } catch (error) {
            console.error('Error in getUserOrders:', error);
            res.status(500);
            throw new Error('獲取訂單記錄失敗');
        }
    })
};

export default orderController;

