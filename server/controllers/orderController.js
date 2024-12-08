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

            // 格式化訂單項目
            const formattedItems = orderItems.map(item => ({
                name: item.name,
                quantity: item.numbers,
                price: item.price
            }));

            // 創建訂單
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

            // 更新用戶的訂單歷史
            await User.findByIdAndUpdate(userId, {
                $push: {
                    orders: {
                        orderNumber: order.orderNumber,
                        date: order.createdAt,
                        amount: order.totalAmount,
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

            res.status(201).json({
                success: true,
                order,
                message: '訂單創建成功'
            });

        } catch (error) {
            console.error('訂單創建錯誤:', error);
            res.status(500).json({
                success: false,
                message: '訂單創建失敗',
                error: error.message
            });
        }
    }),

    getUserOrders: asyncHandler(async (req, res) => {
        try {
            const orders = await Order.find({ user: req.user._id })
                .sort('-createdAt');
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: '獲取訂單失敗' });
        }
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

