import express from "express";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import Product from "./models/product.js";
import Category from "./models/category.js";
import news from "./data/newsItem.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/products", asyncHandler(async (req, res) => {
    try {
        const { category } = req.query;
        let products;

        if (!category || category === "全部") {
            products = await Product.find({});
        } else {
            products = await Product.find({ category });
        }

        console.log('Fetched products:', products);
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}));

app.get("/categories", asyncHandler(async (req, res) => {
    try {
        const categories = await Category.find({});
        console.log('Fetched categories:', categories);
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}));

app.get("/news", (req, res) => {
    try {
        console.log('Sending news data:', news);
        res.json(news);
    } catch (error) {
        console.error('Error sending news:', error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 1999;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something broke!",
        error: err.message
    });
});

