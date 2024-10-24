import React, { useState } from "react";
import "./index.css";

const Menu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: "鮪魚壽司",
      image: "https://picsum.photos/id/684/600/400",
      price: "$50",
    },
    {
      id: 2,
      name: "炭烤雞串",
      image: "https://picsum.photos/id/685/600/400",
      price: "$40",
    },
    {
      id: 3,
      name: "炸蝦天婦羅",
      image: "https://picsum.photos/id/686/600/400",
      price: "$60",
    },
    {
      id: 4,
      name: "牛肉壽喜燒",
      image: "https://picsum.photos/id/687/600/400",
      price: "$80",
    },
    {
      id: 5,
      name: "章魚燒",
      image: "https://picsum.photos/id/688/600/400",
      price: "$30",
    },
    {
      id: 6,
      name: "味噌湯",
      image: "https://picsum.photos/id/689/600/400",
      price: "$20",
    },
    {
      id: 7,
      name: "鰻魚飯",
      image: "https://picsum.photos/id/690/600/400",
      price: "$90",
    },
    {
      id: 8,
      name: "炸豆腐",
      image: "https://picsum.photos/id/691/600/400",
      price: "$25",
    },
    {
      id: 9,
      name: "海鮮煮",
      image: "https://picsum.photos/id/692/600/400",
      price: "$70",
    },
    {
      id: 10,
      name: "天婦羅蔬菜",
      image: "https://picsum.photos/id/693/600/400",
      price: "$45",
    },
    {
      id: 11,
      name: "涼拌海藻",
      image: "https://picsum.photos/id/694/600/400",
      price: "$15",
    },
    {
      id: 12,
      name: "抹茶冰淇淋",
      image: "https://picsum.photos/id/695/600/400",
      price: "$35",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="menu-page">
      <div className="img-box">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`img ${openIndex === index ? "open" : ""}`}
            onClick={() => handleItemClick(index)}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="menu-box">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-listTitle">{item.name}</h3>
              <p className="menu-listPrice">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
