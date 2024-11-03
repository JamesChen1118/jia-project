import connectDB from "./config/db.js";
import Category from "./models/category.js";
import Product from "./models/product.js";
import categories from "./data/categories.js";
import products from "./data/products.js";

connectDB();

const importData = async () => {
    try {
        // 清除舊資料
        await Category.deleteMany();
        await Product.deleteMany();

        // 導入新資料
        await Category.insertMany(categories);
        await Product.insertMany(products);

        console.log("資料導入成功");
        process.exit();
    } catch (error) {
        console.error("資料導入錯誤:", error);
        process.exit(1);
    }
};

importData();
