import Order from "../models/order.js";
import asyncHandler from "express-async-handler";

const orderController = {
    getOrders: asyncHandler(async (req, res) => {
        try {
            const orders = await Order.find({})
                .populate('orderItems.product')
                .sort({ createdAt: -1 });
            console.log('Orders fetched:', orders);
            res.json(orders);
        } catch (error) {
            console.error('Error in getOrders:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    addOrder: asyncHandler(async (req, res) => {
        try {
            console.log('Received order data:', req.body);
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            console.error('Error in addOrder:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default orderController; 