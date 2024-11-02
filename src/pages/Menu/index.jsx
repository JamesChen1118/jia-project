import React from "react";
import { motion } from "framer-motion";
import products from "../../../server/data/products";

const Menu = () => {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="w-[70%] mx-auto mt-[100px] mb-[150px]">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-main-color-yellow mb-6 pb-2 text-center relative
                       drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {category}
            {/* 添加雙底線元素 */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 border-b-4 border-double border-main-color-yellow" />
          </motion.h2>

          {/* 該分類下的菜品列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all
                          shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-full shadow-md"
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
