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
    console.log(`${req.method} ${req.url}`);
    next();
});

// API 路由
app.use('/api', router);

// 錯誤處理中間件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

// 連接資料庫
await connectDB();

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Available routes:');
    console.log('- GET /api/news');
});