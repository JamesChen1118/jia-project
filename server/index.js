import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

// 中間件
app.use(express.json());

// 日誌中間件
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// API 路由 - 注意這裡不需要 /api 前綴
app.use('/', router);  // 修改這行

// 連接資料庫
await connectDB();

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});