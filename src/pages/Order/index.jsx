import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductItem from "@/components/ProductItem";
import { productApi } from "@/api/module/product.js";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";
import ProductModal from "@/components/ProductModal";

const categories = [
  { name: "all" },
  { name: "sashimi" },
  { name: "sushi" },
  { name: "seafood" },
  { name: "tempura" },
  { name: "yakimono" },
  { name: "setMeal" },
  { name: "dessert" },
  { name: "drinks" },
];

const Order = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all"); // 修改這裡
  const [products, setProducts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProductsByCategory = async (category = "all") => {
    // 修改這裡
    try {
      const data = await productApi.getProductsByCategory(category);
      console.log(`Fetched ${data.length} products for category:`, category);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    getProductsByCategory(category);
  };

  useEffect(() => {
    getProductsByCategory("all"); // 修改這裡
  }, []);

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="w-[90%] lg:w-[80%] mx-auto mt-[120px] flex flex-col lg:flex-row">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-full bg-[#333] text-main-color-yellow py-4 rounded-t-[15px] text-xl font-bold"
        >
          {t("home.menu.categoryTitle")} ▼
        </button>

        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"}
           lg:block w-full lg:w-[20%] bg-[#333] rounded-b-[15px] lg:rounded-[15px] p-[20px] lg:p-[30px] text-white sticky top-24`}
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
            {products.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id} // 修改這裡
                image={product.image}
                category={product.category}
                name={product.name}
                price={product.price}
                description={product.description}
                onImageClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
                onTitleClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />
    </>
  );
};

export default Order;
