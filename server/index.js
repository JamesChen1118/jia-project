import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', router);

app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(err.status || 500).json({
        message: err.message || '伺服器錯誤'
    });
});

const PORT = process.env.PORT || 6001;

const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected successfully');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
};

startServer();

