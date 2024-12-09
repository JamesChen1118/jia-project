import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                res.status(401);
                throw new Error('用戶不存在');
            }

            req.user = user;
            next();
        } catch (error) {
            console.error('Auth error:', error);
            res.status(401);
            throw new Error('未授權的訪問');
        }
    } else {
        res.status(401);
        throw new Error('請先登入');
    }
});

export default protect;
