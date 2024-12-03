import express from "express";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// API 路由
app.use('/api', router);

// 在生產環境提供靜態文件
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
}

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});