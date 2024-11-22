import Product from "../models/product.js";
import products from "../data/products.js";
import asyncHandler from "express-async-handler";

const productController = {
    getProducts: asyncHandler(async (req, res) => {
        try {
            const { category } = req.query;
            console.log('Requested category:', category);
            console.log('Available categories:', [...new Set(products.map(p => p.category))]);

            let filteredProducts = products;
            if (category && category !== "all") {
                console.log('Filtering products for category:', category);
                filteredProducts = products.filter(p => {
                    const match = p.category.toLowerCase() === category.toLowerCase();
                    console.log(`Product ${p.name} category ${p.category} matches ${category}: ${match}`);
                    return match;
                });
            }

            console.log(`Found ${filteredProducts.length} products for category ${category}`);
            console.log('Filtered products:', filteredProducts.map(p => p.name));
            res.json(filteredProducts);
        } catch (error) {
            console.error('Error in getProducts:', error);
            res.status(500).json({ message: error.message });
        }
    }),

    getCategories: asyncHandler(async (req, res) => {
        try {
            const categories = [...new Set(products.map(p => p.category))];
            console.log('Available categories:', categories);
            res.json(categories);
        } catch (error) {
            console.error('Error in getCategories:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default productController;