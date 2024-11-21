import Product from "../models/product.js";
import products from "../data/products.js";

const productController = {
    getProducts: async (req, res) => {
        try {
            const { category } = req.query;
            console.log('Requested category:', category);

            // 檢查數據庫連接
            if (!Product.db.readyState) {
                throw new Error('Database connection not ready');
            }

            let query = {};
            if (category && category !== "all") {
                query.category = category;
            }

            const foundProducts = await Product.find(query);
            console.log(`Found ${foundProducts.length} products`);

            // 如果沒有找到產品，返回示例數據
            if (foundProducts.length === 0) {
                console.log('No products found, returning sample data');
                return res.json(products);
            }

            res.json(foundProducts);
        } catch (error) {
            console.error('Error in getProducts:', error);
            // 如果發生錯誤，返回示例數據
            console.log('Error occurred, returning sample data');
            res.json(products);
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = ['all', 'sashimi', 'sushi', 'seafood', 'tempura', 'yakimono', 'setMeal', 'dessert', 'drinks'];
            res.json(categories);
        } catch (error) {
            console.error('Error in getCategories:', error);
            res.status(500).json({ message: error.message });
        }
    }
};

export default productController;