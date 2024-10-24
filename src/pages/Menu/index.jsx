import React, { useState } from "react";
import "./index.css";

const menuItems = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/684/600/400",
    title: "鮪魚壽司",
    description: "新鮮的鮪魚搭配壽司飯，口感滑嫩。",
    price: "$50",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/685/600/400",
    title: "炭烤雞串",
    description: "經典的炭烤雞串，外焦內嫩，醬汁香濃。",
    price: "$40",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/686/600/400",
    title: "炸蝦天婦羅",
    description: "酥脆的炸蝦，搭配特製天婦羅醬，讓你一試成主顧。",
    price: "$60",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/687/600/400",
    title: "牛肉壽喜燒",
    description: "嫩滑牛肉與新鮮蔬菜，配上甜美醬汁，令人垂涎。",
    price: "$80",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/688/600/400",
    title: "章魚燒",
    description: "外酥內軟的章魚燒，搭配美味的醬汁與海苔。",
    price: "$30",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/689/600/400",
    title: "味噌湯",
    description: "傳統的味噌湯，清淡又鮮美，讓人暖心。",
    price: "$20",
  },
  {
    id: 7,
    imageUrl: "https://picsum.photos/id/690/600/400",
    title: "鰻魚飯",
    description: "香醇的鰻魚搭配熱騰騰的白飯，是經典的日本料理。",
    price: "$90",
  },
  {
    id: 8,
    imageUrl: "https://picsum.photos/id/691/600/400",
    title: "炸豆腐",
    description: "外脆內嫩的炸豆腐，搭配醬油或鹽食用更添風味。",
    price: "$25",
  },
  {
    id: 9,
    imageUrl: "https://picsum.photos/id/692/600/400",
    title: "海鮮煮",
    description: "各種新鮮海鮮和蔬菜，熬煮成美味的湯品。",
    price: "$70",
  },
  {
    id: 10,
    imageUrl: "https://picsum.photos/id/693/600/400",
    title: "天婦羅蔬菜",
    description: "新鮮的時令蔬菜，裹上麵糊炸至金黃酥脆。",
    price: "$45",
  },
  {
    id: 11,
    imageUrl: "https://picsum.photos/id/694/600/400",
    title: "涼拌海藻",
    description: "清爽的海藻沙拉，健康又美味，是絕佳的小菜。",
    price: "$15",
  },
  {
    id: 12,
    imageUrl: "https://picsum.photos/id/695/600/400",
    title: "抹茶冰淇淋",
    description: "綿密的抹茶冰淇淋，帶來清新的甜蜜滋味。",
    price: "$35",
  },
  {
    id: 13,
    imageUrl: "https://picsum.photos/id/696/600/400",
    title: "烤鯖魚",
    description: "新鮮鯖魚經過精心烤製，外皮酥脆，肉質鮮嫩多汁。",
    price: "$55",
  },
  {
    id: 14,
    imageUrl: "https://picsum.photos/id/697/600/400",
    title: "蒜香炒飯",
    description: "香噴噴的蒜香炒飯，每一粒米飯都充滿蒜香味。",
    price: "$40",
  },
  {
    id: 15,
    imageUrl: "https://picsum.photos/id/698/600/400",
    title: "炸雞塊",
    description: "外酥內嫩的炸雞塊，搭配特製醬料，是完美的下酒菜。",
    price: "$45",
  },
];

const Menu = ({ limit }) => {
  const [openImageId, setOpenImageId] = useState(null);

  const handleImageClick = (id) => {
    setOpenImageId(openImageId === id ? null : id);
  };

  const displayedItems = limit ? menuItems.slice(0, limit) : menuItems;

  return (
    <div className="wrapper">
      <div className="img-box">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className={`img ${openImageId === item.id ? "open" : ""}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
            onClick={() => handleImageClick(item.id)}
          >
            {openImageId === item.id && (
              <div className="menu-box">
                <div className="menu-listTitle">{item.title}</div>
                <div className="menu-list">
                  <img
                    src={item.imageUrl}
                    className="menu-listImg"
                    alt={item.title}
                  />
                  <div className="menu-listItem">
                    <div className="menu-listContent">{item.description}</div>
                    <div className="menu-listPrice">{item.price}</div>
                    <a href="#" className="toMenu">
                      前往菜單
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
