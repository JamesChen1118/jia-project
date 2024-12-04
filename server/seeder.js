import connectDB from "./config/db.js";
import products from "./data/products.js";
import categories from "./data/categories.js";
import news from "./data/newsItem.js";
import users from "./data/user.js";  // 添加這行

import Product from "./models/product.js";
import Category from "./models/category.js";
import NewsItem from "./models/newsItem.js";
import User from "./models/user.js";  // 添加這行

connectDB();

const deleteData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await NewsItem.deleteMany();
    await User.deleteMany();  // 添加這行
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
    await NewsItem.insertMany(news);
    await User.insertMany(users);  // 添加這行
    console.log("seed data is done.");
  } catch (error) {
    console.log(error);
  }
};

importSeedData();