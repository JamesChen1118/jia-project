// server/controllers/orderController.js
import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import User from '../models/user.js';

const orderController = {
    createOrder: asyncHandler(async (req, res) => {
        try {
            const { orderItems, paymentInfo, totalPrice } = req.body;
            const userId = req.user._id;
            const user = await User.findById(userId);
            
            if (!user) {
                return res.status(404).json({ message: '找不到用戶' });
            }

            const order = await Order.create({
                user: userId,
                orderNumber: `JIA${Date.now()}`,
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
                customerInfo: {
                    username: user.username,
                    phone: user.phone,
                    email: user.email
                }
            });

            await User.findByIdAndUpdate(userId, {
                $push: {
                    orders: {
                        orderNumber: order.orderNumber,
                        date: order.createdAt,
                        amount: order.totalAmount
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
            console.error('訂單創建失敗:', error);
            res.status(500).json({ message: '創建訂單失敗' });
        }
    }),

    getOrders: asyncHandler(async (req, res) => {
        const orders = await Order.find()
            .populate('user', 'username phone email')
            .sort('-createdAt');
        res.json(orders);
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        const orders = await Order.find({ user: req.user._id })
            .sort('-createdAt');
        res.json(orders);
    }),

    getUserHistory: asyncHandler(async (req, res) => {
        try {
            const user = await User.findById(req.user._id)
                .select('history')
                .sort({ 'history.date': -1 });
            
            if (!user) {
                return res.status(404).json({ message: '找不到用戶' });
            }
            
            res.json(user.history || []);
        } catch (error) {
            res.status(500).json({ message: '獲取消費記錄失敗' });
        }
    })
};

export default orderController;