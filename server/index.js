import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import categories from "./data/categories.js";
import news from "./data/newsItem.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.get("/products/:category", (req, res) => {
    if (req.params.category === "全部") {
        return res.json(products);
    }
    const searchProducts = products.filter(
        (item) => item.category === req.params.category
    );
    return res.json(searchProducts);
});

app.get("/categories", (req, res) => {
    return res.json(categories);
});

app.get("/news", (req, res) => {
    return res.json(news);
});


const PORT = process.env.PORT || 1999;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

