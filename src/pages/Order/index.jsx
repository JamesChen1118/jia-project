import ProductCard from "@/components/ProductItem";
import { productApi } from "@/api/product.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    const data = await productApi.getCategories();
    setCategories(data);
  };

  const filterProducts = async (category) => {
    const data = await productApi.searchProducts(category);
    setProducts(data);
  };

  useEffect(() => {
    filterProducts("all");
    getCategories();
  }, []);

  return (
    <div className="w-[80%] flex mx-auto mt-[120px]">
      <div className="w-[20%] h-[2000px] bg-[#333] rounded-[15px] p-[30px] text-white">
        <h2 className="text-[30px] font-bold text-main-color-yellow text-center py-5 border-b border-[#bbaf48]">
          {t("categoryTitle")}
        </h2>
        <ul className="mt-[15px] list-none text-center">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => filterProducts(category.name)}
              className="mt-[35px] inline-block px-20 py-2.5 bg-main-color-yellow rounded-xl font-medium text-black text-2xl transition-all duration-700 ease-in-out hover:text-white hover:font-black hover:tracking-[3px] hover:scale-110 cursor-pointer"
            >
              {t(`categories.${category.name}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[80%] ml-[30px]">
        <div className="grid grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={product.image}
              category={product.category}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
