import asyncHandler from 'express-async-handler';
import Product from '../models/product.js';

const productController = {
    getAllProducts: asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    }),

    getProductsByCategory: asyncHandler(async (req, res) => {
        const { category } = req.params;
        const products = await Product.find({ category });
        res.json(products);
    }),

    getProductById: asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error('找不到產品');
        }
    })
};

export default productController;

