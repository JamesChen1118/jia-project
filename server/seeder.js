/* eslint-env node */

import connectDB from "./config/db.js";

import products from "./data/products.js";
import categories from "./data/categories.js";
import news from "./data/newsItem.js";

import Product from "./models/product.js";
import Category from "./models/category.js";
import NewsItem from "./models/newsItem.js";

connectDB();

const deleteData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await NewsItem.deleteMany();
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
    console.log("seed data is done.");
  } catch (error) {
    console.log(error);
  }
};

importSeedData();
