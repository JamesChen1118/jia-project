import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path'
import connectDB from "./config/db.js";
import router from "./routes/index.js";
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const publicPath = path.join(__dirname, '../dist')

dotenv.config();
const app = express();

const corsOptions = {
    origin: ['https://jia-flax.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  };
  app.use(cors());
app.use(express.json());
app.use(express.static(publicPath))
app.use('/api', router);
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

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

