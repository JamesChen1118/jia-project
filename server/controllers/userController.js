import bcrypt from "bcryptjs";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const userController = {
    login: asyncHandler(async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.json({
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("無效的使用者名稱或密碼");
        }
    }),
    register: asyncHandler(async (req, res) => {
        const { username, password, email, phone } = req.body;
        const userExists = await User.findOne({ username });
        if (userExists) {
            // error code
            res.status(400);
            throw new Error("此使用者名稱已經被註冊");
        }
        const user = await User.create({
            username,
            password: bcrypt.hashSync(password, 10),
            email,
            phone,
        });
        if (user) {
            res.status(200).json({
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error("無效的使用者資訊");
        }
    }),
    getUser: asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    }),
    updateUser: asyncHandler(async (req, res) => {
        const categories = await Category.find({});
        return res.json(categories);
    }),
};

export default userController;
