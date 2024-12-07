import connectDB from "./config/db.js";
import products from "./data/products.js";
import categories from "./data/categories.js";
import news from "./data/newsItem.js";
import users from "./data/user.js";

import Product from "./models/product.js";
import Category from "./models/category.js";
import NewsItem from "./models/newsItem.js";
import User from "./models/user.js";

connectDB();

const importSeedData = async () => {
    try {
        const productsCount = await Product.countDocuments();
        const categoriesCount = await Category.countDocuments();
        const newsCount = await NewsItem.countDocuments();
        const usersCount = await User.countDocuments();

        if (categoriesCount === 0) {
            await Category.insertMany(categories);
            console.log('Categories seeded');
        }

        if (productsCount === 0) {
            await Product.insertMany(products);
            console.log('Products seeded');
        }

        if (newsCount === 0) {
            await NewsItem.insertMany(news);
            console.log('News seeded');
        }

        if (usersCount === 0) {
            await User.insertMany(users);
            console.log('Users seeded');
        }

        console.log('Seed data check completed');
        process.exit(0);
    } catch (error) {
        console.error('Error importing seed data:', error);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        await Product.deleteMany();
        await Category.deleteMany();
        await NewsItem.deleteMany();
        await User.deleteMany();
        console.log('All data deleted');
        process.exit(0);
    } catch (error) {
        console.error('Error deleting data:', error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    deleteData();
} else {
    importSeedData();
}