import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { productApi } from "@/api/product";
import ProductItem from "@/components/ProductItem";

const Order = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await productApi.getCategories();
      setCategories(categoriesData);
      const productsData = await productApi.searchProducts("全部");
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const handleCategoryClick = async (category) => {
    const data = await productApi.searchProducts(category);
    setProducts(data);
  };

  return (
    <div className="w-[80%] flex mx-auto mt-[120px]">
      {/* 分類選單 */}
      <div className="w-[20%] h-[2000px] bg-[#333] rounded-[15px] p-[30px] text-white">
        <h2 className="text-[30px] font-bold text-main-color-yellow text-center py-5">
          {t("home.menu.categoryTitle")}
        </h2>
        <ul className="mt-[15px] list-none text-center">
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => handleCategoryClick(category.name)}
              className="mt-[35px] inline-block w-[200px] py-2.5 bg-main-color-yellow 
                         rounded-xl font-medium text-black text-2xl 
                         transition-all duration-700 ease-in-out 
                         hover:text-white hover:font-black hover:tracking-[3px] 
                         hover:scale-110 cursor-pointer"
            >
              {t(`home.menu.categories.${category.name}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* 商品列表 */}
      <div className="w-[80%] ml-[30px]">
        <div className="grid grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductItem
              key={product._id}
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
  );
};

export default Order;
