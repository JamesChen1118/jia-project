import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

// API 路由
app.use('/api', router);

// 連接資料庫
await connectDB();

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});