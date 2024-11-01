import "@/components/Buttons/buttons.css";
import "./index.css";
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
    <div className="main">
      <div className="sidebar">
        <h2 id="product-title">商品分類</h2>
        <ul className="product-categories">
          {categories.map((category) => (
            <li
              key={category.id}
              className="categories-btn"
              onClick={() => filterProducts(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-list">
        <div className="product-grid">
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
