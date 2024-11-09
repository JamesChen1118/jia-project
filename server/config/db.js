/* eslint-env node */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected.");
    } catch (error) {
        console.log("MongoDB error:", error);
    }
};

export default connectDB;