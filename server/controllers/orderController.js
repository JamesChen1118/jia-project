import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';

const isDev = process.env.NODE_ENV === 'development';

const safeLog = (message, data) => {
    if (isDev) {
        console.log(message, data);
    }
};

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

            res.status(201).json(order);
        } catch (error) {
            console.error('Create order error:', error);
            res.status(400);
            throw new Error(error.message || '建立訂單失敗');
        }
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        try {
            if (!req.user?._id) {
                res.status(401);
                throw new Error('請先登入');
            }

            const orders = await Order.find({ user: req.user._id })
                .select('_id orderNumber date totalPrice totalAmount status orderItems items')
                .sort('-date')
                .lean();

            safeLog('Found orders:', orders);

            const formattedOrders = orders.map(order => ({
                _id: order._id,
                orderNumber: order.orderNumber,
                date: order.date || new Date(),
                totalPrice: order.totalPrice || order.totalAmount || 0,
                status: order.status || 'completed',
                orderItems: Array.isArray(order.orderItems)
                    ? order.orderItems.map(item => ({
                        name: item?.name || '',
                        numbers: item?.numbers || 0,
                        price: item?.price || 0
                    }))
                    : Array.isArray(order.items)
                        ? order.items.map(item => ({
                            name: item?.name || '',
                            numbers: item?.quantity || 0,
                            price: item?.price || 0
                        }))
                        : []
            }));

            safeLog('Formatted orders:', formattedOrders);
            res.json(formattedOrders);
        } catch (error) {
            console.error('Get orders error:', error);
            res.status(500);
            throw new Error('獲取訂單記錄失敗');
        }
    })
};

export default orderController;

