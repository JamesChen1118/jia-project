import express from "express";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));


    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

const PORT = process.env.PORT || 6000;

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

