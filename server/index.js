/* eslint-env node */
import express from "express";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";

import Product from "./models/product.js";
import Category from "./models/category.js";
import NewsItem from "./models/newsItem.js";
import User from "./models/user.js";
import Cart from "./models/cart.js";
import Order from "./models/order.js";
import connectDB from "./config/db.js";
import Reservation from "./models/reservation.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get(
    "/orders",
    asyncHandler(async (req, res) => {
        const orders = await Order.find({});
        return res.json(orders);
    })
);

app.post(
    "/order",
    asyncHandler(async (req, res) => {
        const { orderItems, paymentInfo, totalPrice } = req.body;
        console.log(req.body);
        const order = new Order({
            orderItems,
            paymentInfo,
            totalPrice,
        });
        await order.save();
        res.status(200).json({});
    })
);

app.get(
    "/products",
    asyncHandler(async (req, res) => {
        const categoryName = req.query.category;
        if (categoryName === "all" || !categoryName) {
            const products = await Product.find({});
            return res.json(products);
        }
        const products = await Product.find({ category: categoryName });
        return res.json(products);
    })
);

app.get(
    "/categories",
    asyncHandler(async (req, res) => {
        const categories = await Category.find({});
        return res.json(categories);
    })
);

app.get(
    "/news",
    asyncHandler(async (req, res) => {
        const newsItems = await NewsItem.find({}).sort({ date: -1 });
        return res.json(newsItems);
    })
);

app.post(
    "/api/users/register",
    asyncHandler(async (req, res) => {
        const { username, password, email, phone } = req.body;
        const user = await User.create({
            username,
            password,
            email,
            phone,
        });
        res.status(201).json(user);
    })
);

app.post(
    "/api/users/login",
    asyncHandler(async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && user.password === password) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    })
);

app.post(
    "/api/cart",
    asyncHandler(async (req, res) => {
        const { userId, items } = req.body;
        const totalAmount = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const cart = await Cart.create({
            user: userId,
            items,
            totalAmount,
        });

        res.status(201).json(cart);
    })
);

app.put(
    "/api/cart/:cartId",
    asyncHandler(async (req, res) => {
        const { items } = req.body;
        const totalAmount = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const cart = await Cart.findByIdAndUpdate(
            req.params.cartId,
            {
                items,
                totalAmount,
                status: "active",
            },
            { new: true }
        );

        res.json(cart);
    })
);

app.get(
    "/api/cart/:userId",
    asyncHandler(async (req, res) => {
        const cart = await Cart.findOne({
            user: req.params.userId,
            status: "active",
        }).populate("items.product");

        res.json(cart || { items: [], totalAmount: 0 });
    })
);

app.post(
    "/reservation",
    asyncHandler(async (req, res) => {
        const newReservation = new Reservation(req.body);
        const savedReservation = await newReservation.save();
        console.log("預約成功:", savedReservation);
        res.status(201).json(savedReservation);
    })
);

app.get(
    "/reservations",
    asyncHandler(async (req, res) => {
        const reservations = await Reservation.find({});
        return res.json(reservations);
    })
);

app.delete(
    "/reservation/:id",
    asyncHandler(async (req, res) => {
        await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "預約已刪除" });
    })
);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
