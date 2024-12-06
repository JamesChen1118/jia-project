// server/controllers/orderController.js
import asyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import User from '../models/user.js';

const orderController = {
    createOrder: asyncHandler(async (req, res) => {
        try {
            const { orderItems, paymentInfo, totalPrice } = req.body;
            console.log('Received order request:', { orderItems, paymentInfo, totalPrice });

            if (!req.user) {
                return res.status(401).json({ message: '請先登入' });
            }

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

            const orderNumber = `JIA${Date.now()}`;

            const order = await Order.create({
                user: userId,
                orderNumber,
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
            console.error('Create order error:', error);
            res.status(500).json({ 
                message: '創建訂單失敗',
                error: error.message
            });
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