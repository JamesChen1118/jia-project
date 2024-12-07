import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        message: err.message || 'Internal server error'
    });
});

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

startServer();