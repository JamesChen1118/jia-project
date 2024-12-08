import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const authMiddleware = asyncHandler(async (req, res, next) => {
    if (req.headers.authorization?.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
            
            if (!req.user) {
                res.status(401);
                throw new Error("用戶不存在或已被刪除");
            }
            
            next();
        } catch (error) {
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
