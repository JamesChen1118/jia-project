import React, { useState } from "react";
import products from "@server/data/products";
import "@/components/Menu3D/index.css";

const Menu3D = () => {
  const [openImageId, setOpenImageId] = useState(null);

  // 直接選擇前12項商品
  const selectedProducts = products.slice(0, 12);

  // 將商品資料轉換成需要的格式
  const menuItems = selectedProducts.map((product) => ({
    id: product.id,
    imageUrl: product.image,
    title: product.name,
    description: `美味的${product.name}，為您帶來極致美食體驗。`,
    price: `$${product.price}`,
  }));

  const handleImageClick = (id) => {
    setOpenImageId(openImageId === id ? null : id);
  };

  return (
    <div className="wrapper">
      <div className="img-box">
        {menuItems.map((item) => (
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
                    <a href="/menu" className="toMenu">
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

export default Menu3D;
