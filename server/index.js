/* eslint-env node */
import express from "express";
import asyncHandler from "express-async-handler";
import Order from "./models/order.js";
import User from "./models/user.js";
import Cart from "./models/cart.js";
import Reservation from "./models/reservation.js";
import newsController from "./controllers/newsController.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

const app = express();

connectDB();

app.use(express.json());

app.use('/', routes);

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

app.post(
    "/users/register",
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
    "/users/login",
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
    "/cart",
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
    "/cart/:cartId",
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
    "/cart/:userId",
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

app.get('/users/profile', authMiddleware, asyncHandler(async (req, res) => {
    res.json(req.user);
}));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
