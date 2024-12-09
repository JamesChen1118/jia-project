import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../../../server/data/products.js";

const Menu3D = () => {
  const [openImageId, setOpenImageId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const selectedProducts = products.slice(0, 12);

    const formattedMenuItems = selectedProducts.map((product) => ({
      id: product.name,
      imageUrl: product.image,
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
    }));

    setMenuItems(formattedMenuItems);
  }, []);

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
                <div className="menu-listTitle">
                  {t(`products.items.${item.name}.name`)}
                </div>
                <div className="menu-list">
                  <img
                    src={item.imageUrl}
                    className="menu-listImg"
                    alt={t(`products.items.${item.name}.name`)}
                  />
                  <div className="menu-listItem">
                    <div className="menu-listContent">
                      {t(`products.items.${item.name}.description`)}
                    </div>
                    <div className="menu-listPrice">${item.price}</div>
                    <NavLink to="/menu" className="toMenu">
                      {t("home.menu.toMenu")}
                    </NavLink>
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
