// server/controllers/orderController.js
import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import User from '../models/user.js';

const orderController = {
    createOrder: asyncHandler(async (req, res) => {
        try {
            const { orderItems, paymentInfo, totalPrice } = req.body;
            const userId = req.user._id;

            const orderNumber = `JIA${Date.now()}`;

            const order = await Order.create({
                user: userId,
                orderNumber,
                items: orderItems.map(item => ({
                    productId: item.id,
                    name: item.name,
                    quantity: item.numbers,
                    price: item.price
                })),
                totalAmount: totalPrice,
                paymentInfo: {
                    cardNumber: paymentInfo.cardNumbers.slice(-4),
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
                    history: orderItems.map(item => ({
                        productName: item.name,
                        date: order.createdAt,
                        quantity: item.numbers,
                        amount: item.price * item.numbers
                    }))
                }
            });

            res.status(201).json(order);
        } catch (error) {
            console.error('Order creation error:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        const orders = await Order.find({ user: req.user._id })
            .sort('-createdAt');
        res.json(orders);
    }),

    // 添加這個方法
    getOrderById: asyncHandler(async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);
            if (order && order.user.toString() === req.user._id.toString()) {
                res.json(order);
            } else {
                res.status(404);
                throw new Error('Order not found');
            }
        } catch (error) {
            console.error('Get order by id error:', error);
            res.status(404).json({ message: 'Order not found' });
        }
    })
};

export default orderController;