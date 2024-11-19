import Product from "../models/product.js";
import Category from "../models/category.js";
import asyncHandler from "express-async-handler";

const productController = {
    getProducts: asyncHandler(async (req, res) => {
        const categoryName = req.query.category;
        if (categoryName === "all" || !categoryName) {
            const products = await Product.find({});
            return res.json(products);
        }
        const products = await Product.find({ category: categoryName });
        return res.json(products);
    }),
    getCategories: asyncHandler(async (req, res) => {
        const categories = await Category.find({});
        return res.json(categories);
    })
};

export default productController;