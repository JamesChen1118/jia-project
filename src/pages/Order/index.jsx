import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductItem from "@/components/ProductItem";
import { productApi } from "@/api/module/product.js";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";

const categories = [
  { key: "all", name: "all" },
  { key: "sashimi", name: "sashimi" },
  { key: "sushi", name: "sushi" },
  { key: "seafood", name: "seafood" },
  { key: "tempura", name: "tempura" },
  { key: "yakimono", name: "yakimono" },
  { key: "setMeal", name: "setMeal" },
  { key: "dessert", name: "dessert" },
  { key: "drinks", name: "drinks" },
];

const Order = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all"); // 使用英文key
  const [products, setProducts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getProductsByCategory = async (category = "all") => {
    try {
      const data = await productApi.getProductsByCategory(category);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    getProductsByCategory(category);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    getProductsByCategory("all");
  }, []);

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="w-[90%] lg:w-[80%] mx-auto mt-[120px] flex flex-col lg:flex-row relative">
        <div className="lg:hidden w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-[#333] text-main-color-yellow py-4 rounded-t-[15px] text-xl font-bold"
          >
            {t("home.menu.categoryTitle")} {isMobileMenuOpen ? "▲" : "▼"}
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block w-full lg:w-[20%] bg-[#333] rounded-b-[15px] lg:rounded-[15px] 
          p-[20px] lg:p-[30px] text-white lg:sticky lg:top-24 lg:h-fit`}
        >
          <ul className="flex flex-wrap lg:flex-col gap-3 justify-center items-center">
            {categories.map((category) => (
              <li
                key={category.key}
                onClick={() => handleCategoryClick(category.key)}
                className={`inline-block w-1/4 lg:w-full py-2 lg:py-2.5 
                           bg-main-color-yellow rounded-xl font-medium 
                           text-black text-lg lg:text-2xl text-center
                           transition-all duration-700 ease-in-out 
                           hover:text-white hover:font-black hover:tracking-[3px] 
                           hover:scale-110 cursor-pointer
                           ${
                             selectedCategory === category.key
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
            {products.map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
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
