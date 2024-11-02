// 連結資料庫
import connectDB from "./config/db.js";
// 導入初始資料
import products from "./data/products.js";
import categories from "./data/categories.js";
// 導入模型
import Product from "./models/product.js";
import Category from "./models/category.js";

connectDB();

const deleteData = async () => {
    try {
        await Product.deleteMany();
        await Category.deleteMany();
        console.log("data is deleted.");
    } catch (error) {
        console.log(error);
    }
};

const importSeedData = async () => {
    try {
        await deleteData();
        await Category.insertMany(categories);
        await Product.insertMany(products);
        console.log("seed data is done.");
    } catch (error) {
        console.log(error);
    }
};

importSeedData();
