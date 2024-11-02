import React from "react";
import { motion } from "framer-motion";
import products from "../../../server/data/products";

const Menu = () => {
  // 依照類別分組商品
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="w-[80%] mx-auto mt-[120px] mb-[50px]">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="mb-12">
          {/* 分類標題 */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-main-color-yellow mb-6 pb-2 border-b-2 border-main-color-yellow"
          >
            {category}
          </motion.h2>

          {/* 該分類下的菜品列表 */}
          <div className="space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-bold text-main-color-yellow">
                    {item.name}
                  </h3>
                </div>
                <p className="text-2xl font-bold text-main-color-yellow">
                  ${item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
