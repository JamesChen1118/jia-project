import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductItem from "@/components/ProductItem";
import products from "../../../server/data/products";
import ScrollToContent from "@/components/ScrollToContent";
import { productApi } from "@/api/module/product.js";

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

const Order = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "全部"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <ScrollToContent />
      <div className="w-[90%] lg:w-[80%] mx-auto mt-[120px] flex flex-col lg:flex-row">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-full bg-[#333] text-main-color-yellow py-4 rounded-t-[15px] text-xl font-bold"
        >
          {t("home.menu.categoryTitle")} ▼
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block w-full lg:w-[20%] bg-[#333] rounded-b-[15px] lg:rounded-[15px] p-[20px] lg:p-[30px] text-white sticky top-24`}
        >
          <h2 className="text-2xl lg:text-[30px] font-bold text-main-color-yellow text-center py-3 lg:py-5">
            {t("home.menu.categoryTitle")}
          </h2>
          <ul className="flex flex-wrap lg:flex-col gap-3 justify-center items-center">
            {categories.map((category) => (
              <li
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`inline-block w-[120px] lg:w-[150px] py-2 lg:py-2.5 bg-main-color-yellow 
                           rounded-xl font-medium text-black text-lg lg:text-2xl text-center
                           transition-all duration-700 ease-in-out 
                           hover:text-white hover:font-black hover:tracking-[3px] 
                           hover:scale-110 cursor-pointer
                           ${
                             selectedCategory === category.name
                               ? "text-white font-black tracking-[3px]"
                               : ""
                           }
                           lg:mt-[35px]`}
              >
                {t(`home.menu.categories.${category.name}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[80%] lg:ml-[30px] mt-6 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] lg:gap-[30px]">
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
