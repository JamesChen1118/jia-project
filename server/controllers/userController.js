import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

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
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error('帳號或密碼錯誤');
        }
    }),

    register: asyncHandler(async (req, res) => {
        const { username, phone, email, password } = req.body;

        try {
            // 檢查必要欄位
            if (!username || !phone || !email || !password) {
                res.status(400);
                throw new Error('所有欄位都是必填的');
            }

            // 檢查用戶名是否已存在
            const userExists = await User.findOne({ username });
            if (userExists) {
                res.status(400);
                throw new Error('用戶名已被使用');
            }

            // 檢查郵箱是否已存在
            const emailExists = await User.findOne({ email });
            if (emailExists) {
                res.status(400);
                throw new Error('郵箱已被使用');
            }

            // 創建新用戶
            const user = await User.create({
                username,
                phone,
                email,
                password,
                isAdmin: false,
                orders: [],
                history: [],
                reservations: []
            });

            if (user) {
                const token = generateToken(user._id);
                res.status(201).json({
                    _id: user._id,
                    username: user.username,
                    phone: user.phone,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token
                });
            } else {
                res.status(400);
                throw new Error('無效的用戶資料');
            }
        } catch (error) {
            console.error('Register error:', error);
            res.status(error.status || 500);
            throw new Error(error.message || '註冊失敗');
        }
    }),

    getUser: asyncHandler(async (req, res) => {
        try {
            const user = await User.findById(req.user._id).select('-password');
            if (user) {
                res.json({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    isAdmin: user.isAdmin,
                    orders: user.orders,
                    history: user.history
                });
            } else {
                res.status(404);
                throw new Error('找不到使用者');
            }
        } catch (error) {
            res.status(500);
            throw new Error('獲取用戶資料失敗');
        }
    }),

    updateUser: asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);

        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;

            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                phone: updatedUser.phone,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id)
            });
        } else {
            res.status(404);
            throw new Error('找不到使用者');
        }
    }),

    deleteUser: asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            await user.remove();
            res.json({ message: '用戶已刪除' });
        } else {
            res.status(404);
            throw new Error('找不到使用者');
        }
    })
};

export default userController;