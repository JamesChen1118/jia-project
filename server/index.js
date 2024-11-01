import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import categories from "./data/categories.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.json(products);
});
app.get("/api/products/:category", (req, res) => {
    console.log("Requested category:", req.params.category);

    if (req.params.category === "全部") {
        return res.json(products);
    }

    const searchProducts = products.filter(
        (item) => item.category === req.params.category
    );
    return res.json(searchProducts);
});
app.get("/api/categories", (req, res) => {
    return res.json(categories);
});

const PORT = process.env.PORT || 1999;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

