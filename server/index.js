import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
// import categories from "./data/categories.js";

dotenv.config();

const app = express();

// app.get("/", (req, res) => {
//     res.send('Hello World');
// });

app.get("/", (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 1999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


