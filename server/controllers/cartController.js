import Cart from "../models/cart.js";
import asyncHandler from "express-async-handler";

const cartController = {
    createCart: asyncHandler(async (req, res) => {
        try {
            const { userId, items } = req.body;
            const cart = await Cart.create({
                user: userId,
                items,
                totalAmount: items.reduce((total, item) => total + (item.price * item.numbers), 0)
            });
            res.status(201).json(cart);
        } catch (error) {
            console.error('Error in createCart:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    updateCart: asyncHandler(async (req, res) => {
        try {
            const { cartId } = req.params;
            const { items } = req.body;
            const cart = await Cart.findByIdAndUpdate(
                cartId,
                {
                    items,
                    totalAmount: items.reduce((total, item) => total + (item.price * item.numbers), 0)
                },
                { new: true }
            );
            res.json(cart);
        } catch (error) {
            console.error('Error in updateCart:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    getUserCart: asyncHandler(async (req, res) => {
        try {
            const { userId } = req.params;
            const cart = await Cart.findOne({
                user: userId,
                status: 'active'
            }).populate('items.product');
            res.json(cart);
        } catch (error) {
            console.error('Error in getUserCart:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default cartController; 