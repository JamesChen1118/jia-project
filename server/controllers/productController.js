import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

const productController = {
    getProducts: asyncHandler(async (req, res) => {
        try {
            const { category } = req.query;
            console.log('Requested category:', category);

            let query = {};
            if (category && category !== 'all') {
                query = { category: category.toLowerCase() };
            }

            const products = await Product.find(query);
            console.log(`Found ${products.length} products for category: ${category || 'all'}`);
            res.json(products);
        } catch (error) {
            console.error('Error in getProducts:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    getCategories: asyncHandler(async (req, res) => {
        try {
            const categories = await Product.distinct('category');
            console.log('Available categories:', categories);
            res.json(categories);
        } catch (error) {
            console.error('Error in getCategories:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default productController;