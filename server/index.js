import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

// API 路由
app.use('/', router);

// 連接資料庫並啟動服務器
const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected successfully');

        const PORT = process.env.PORT || 6001;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
};

// 錯誤處理
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

startServer();