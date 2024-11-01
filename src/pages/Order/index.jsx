import ProductCard from "@/components/ProductItem";
import { productApi } from "@/api/product.js";
import { useEffect, useState } from "react";

const Order = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    const data = await productApi.getCategories();
    setCategories(data);
  };

  const fetchProducts = async () => {
    const data = await productApi.getProducts();
    setProducts(data);
  };

  const filterProducts = (category) => {
    if (category === "全部") {
      fetchProducts();
    } else {
      setProducts(products.filter((product) => product.category === category));
    }
  };

  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  return (
    <div className="w-[80%] flex mx-auto mt-[120px]">
      <div className="w-[20%] h-[2000px] bg-[#333] rounded-[15px] p-[30px] text-white">
        <h2 className="text-[30px] font-bold text-main-color-yellow text-center py-5 border-b border-[#bbaf48]">
          商品分類
        </h2>
        <ul className="mt-[15px] list-none text-center">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => filterProducts(category.name)}
              className="mt-[35px] inline-block px-20 py-2.5 bg-main-color-yellow rounded-xl font-medium text-black text-2xl transition-all duration-700 ease-in-out hover:text-white hover:font-black hover:tracking-[3px] hover:scale-110 cursor-pointer"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[80%] ml-[30px]">
        <div className="grid grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
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
