import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductItem from "@/components/ProductItem";
import products from "../../../server/data/products";
import ScrollToContent from "@/components/ScrollToContent";

const Order = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // 獲取所有分類
  const categories = [
    { name: "全部" },
    { name: "生食" },
    { name: "壽司" },
    { name: "海鮮" },
    { name: "炸物" },
    { name: "燒烤" },
    { name: "定食" },
    { name: "甜點" },
    { name: "飲品" },
  ];

  // 根據分類篩選商品
  const filteredProducts =
    selectedCategory === "全部"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <ScrollToContent />
      <div className="w-[80%] flex mx-auto mt-[120px]">
        {/* 分類選單 */}
        <div className="w-[20%] h-[2000px] bg-[#333] rounded-[15px] p-[30px] text-white">
          <h2 className="text-[30px] font-bold text-main-color-yellow text-center py-5">
            {t("home.menu.categoryTitle")}
          </h2>
          <ul className="mt-[15px] list-none text-center">
            {categories.map((category) => (
              <li
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`mt-[35px] inline-block w-[200px] py-2.5 bg-main-color-yellow 
                           rounded-xl font-medium text-black text-2xl 
                           transition-all duration-700 ease-in-out 
                           hover:text-white hover:font-black hover:tracking-[3px] 
                           hover:scale-110 cursor-pointer
                           ${
                             selectedCategory === category.name
                               ? "text-white font-black tracking-[3px]"
                               : ""
                           }`}
              >
                {t(`home.menu.categories.${category.name}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* 商品列表 */}
        <div className="w-[80%] ml-[30px]">
          <div className="grid grid-cols-4 gap-[30px]">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.name}
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
