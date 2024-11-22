/* eslint-env node */
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// 使用路由，注意這裡的 /api 前綴
app.use('/api', router);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
