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
        const { username, password, email, phone, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            res.status(400);
            throw new Error('密碼不一致');
        }

        const userExists = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (userExists) {
            res.status(400);
            throw new Error('此帳號或信箱已被註冊');
        }

        const user = await User.create({
            username,
            password,
            email,
            phone,
            orders: [],
            history: []
        });

        if (user) {
            res.status(201).json({
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error('無效的使用者資訊');
        }
    } catch(error) {
        console.error('Register error:', error); // 添加錯誤日誌
        res.status(400);
        throw new Error(error.message || '註冊失敗');
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
                orders: user.orders,
                history: user.history
            });
        } else {
            res.status(404);
            throw new Error('找不到使用者');
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