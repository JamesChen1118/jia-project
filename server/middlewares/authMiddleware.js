import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";

const authMiddleware = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 取得 token
      const token = req.headers.authorization.split(" ")[1];
      console.log(req.headers.authorization);
      // JWT解密
      const decodedId = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decodedId", decodedId);
      // 取得用戶資訊並排除密碼，再將用戶資訊存到req裡面
      req.user = await User.findById(decodedId.id).select("-password");
      // 可進行下一步
      next();
    } catch (err) {
      console.error(error);
      res.status(401);
      throw new Error("沒有權限，或無效的token");
    }
  }
});

export default authMiddleware;
    