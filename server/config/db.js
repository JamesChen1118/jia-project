import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 明確指定 .env 檔案路徑
dotenv.config({
    path: path.resolve(__dirname, '../../.env.development')
});

const connectDB = async () => {
    try {
        // 加入檢查
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);  // 如果連接失敗，結束程序
    }
};

export default connectDB;