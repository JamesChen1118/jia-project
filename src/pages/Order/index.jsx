import { Link } from "react-router-dom";

const Order = () => {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <h2 id="product-title">商品分類</h2>
          <ul className="product-categories">
            {categories.map((category) => (
              <li key={category.id} className="categories-btn">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-list">
          <div className="product-grid">
            {foods.map((food) => (
              <ProductCard
                key={food.id}
                image={food.image}
                category={food.category}
                name={food.name}
                price={food.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
