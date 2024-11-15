import React, { useState } from "react";
import { motion } from "framer-motion";
import products from "../../../server/data/products";
import { useTranslation } from "react-i18next";
import ProductModal from "@/components/ProductModal";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";

const Menu = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
      <ScrollToContent />
      <GoTop />
      <div className="w-[70%] mx-auto mt-[100px] mb-[150px]">
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={`category-${category}`} className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-main-color-yellow mb-6 pb-2 text-center relative
                         drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {t(`home.menu.categories.${category}`)}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 border-b-4 border-double border-main-color-yellow" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <motion.div
                  key={`${category}-${item.name}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center bg-white/10 p-6 rounded-2xl 
                            hover:bg-white/20 transition-all cursor-pointer
                            shadow-[0_4px_12px_rgba(0,0,0,0.25)] 
                            hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)]"
                  onClick={() => {
                    setSelectedProduct(item);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={item.image}
                    alt={t(`products.items.${item.name}.name`)}
                    className="w-24 h-24 object-cover rounded-full shadow-md"
                  />
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-main-color-yellow">
                      {t(`products.items.${item.name}.name`)}
                    </h3>
                    <p className="text-2xl font-bold text-main-color-yellow">
                      ${t(`products.items.${item.name}.price`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      </div>
    </>
  );
};

export default Menu;
