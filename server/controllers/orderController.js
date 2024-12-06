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

            const formattedItems = orderItems.map(item => ({
                productId: item.id,
                name: item.name,
                quantity: item.numbers,
                price: item.price
            }));

            const order = await Order.create({
                user: userId,
                orderNumber: `JIA${Date.now()}`,
                items: formattedItems,
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
                    }
                }
            });

            res.status(201).json(order);
        } catch (error) {
            console.error('訂單創建失敗:', error.message);
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
    })
};

export default orderController;