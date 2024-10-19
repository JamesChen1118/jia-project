import "./index.css";
import ProductCard from "@/components/ProductItem";

// TODO: 之後接後端傳的商品
const categories = [
  {
    id: 1,
    name: "生食",
  },
  {
    id: 2,
    name: "壽司",
  },
  {
    id: 3,
    name: "海鮮",
  },
  {
    id: 4,
    name: "炸物",
  },
  {
    id: 5,
    name: "燒烤",
  },
  {
    id: 6,
    name: "小品",
  },
  {
    id: 7,
    name: "定食",
  },
  {
    id: 8,
    name: "甜點",
  },
  {
    id: 9,
    name: "飲料",
  },
  {
    id: 10,
    name: "全部",
  },
];

const foods = [
  {
    id: 1,
    category: "生食",
    name: "鮪魚壽司",
    image: "https://picsum.photos/id/684/300/340",
    price: 48,
  },
  {
    id: 2,
    category: "生食",
    name: "鮪魚壽司",
    image: "https://picsum.photos/id/684/300/340",
    price: 48,
  },
  {
    id: 3,
    category: "生食",
    name: "鮪魚壽司",
    image: "https://picsum.photos/id/684/300/340",
    price: 48,
  },
  {
    id: 4,
    category: "生食",
    name: "鮪魚壽司",
    image: "https://picsum.photos/id/684/300/340",
    price: 48,
  },
  {
    id: 5,
    category: "生食",
    name: "鮪魚壽司",
    image: "https://picsum.photos/id/684/300/340",
    price: 48,
  },
];

const Order = () => {
  return (
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
  );
};

export default Order;
