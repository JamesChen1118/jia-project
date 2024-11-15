/* eslint-env node */

import connectDB from "./config/db.js";

import products from "./data/products.js";
import categories from "./data/categories.js";
import news from "./data/newsItem.js";

import Product from "./models/product.js";
import Category from "./models/category.js";
import NewsItem from "./models/newsItem.js";
import User from "./models/user.js";
import Cart from "./models/cart.js";

connectDB();

<<<<<<< HEAD
const importData = async () => {
    try {
        await Category.deleteMany();
        await Product.deleteMany();

        await Category.insertMany(categories);
        await Product.insertMany(products);

        console.log("資料導入成功");
        process.exit();
    } catch (error) {
        console.error("資料導入錯誤:", error);
        process.exit(1);
    }
=======
const deleteData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await NewsItem.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();
    console.log("data is deleted.");
  } catch (error) {
    console.log(error);
  }
>>>>>>> 9eb0e3e18476d16066b2b4e76610c5dc15a5a43d
};

const importSeedData = async () => {
  try {
    await deleteData();
    
    await Category.insertMany(categories);
    await Product.insertMany(products);
    await NewsItem.insertMany(news);
    console.log("seed data is done.");
  } catch (error) {
    console.log(error);
  }
};

importSeedData();
