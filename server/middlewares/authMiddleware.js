import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
        try {
            // 取得 token
            token = req.headers.authorization.split(" ")[1];
            console.log('Token received:', token);

            // JWT解密
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded token:', decoded);

            // 查找用戶
            const user = await User.findById(decoded.id);
            console.log('Found user:', user ? 'Yes' : 'No');

            if (!user) {
                res.status(401);
                throw new Error("用戶不存在或已被刪除");
            }

            // 將用戶信息存到 req 中
            req.user = user;
            next();
        } catch (error) {
            console.error('Auth error:', error);
            res.status(401);
            if (error.name === 'JsonWebTokenError') {
                throw new Error("無效的認證令牌");
            } else if (error.name === 'TokenExpiredError') {
                throw new Error("認證令牌已過期");
            } else {
                throw new Error("認證失敗");
            }
        }
    } else {
        res.status(401);
        throw new Error("未提供認證令牌");
    }
});

export default authMiddleware;
