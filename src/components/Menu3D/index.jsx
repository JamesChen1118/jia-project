import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { productApi } from "@/api/product.js";
import { useTranslation } from "react-i18next";

const Menu3D = () => {
  const [openImageId, setOpenImageId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productApi.searchProducts("全部");
        const selectedProducts = products.slice(0, 12);

        const formattedMenuItems = selectedProducts.map((product, index) => ({
          id: product._id,
          imageUrl: product.image,
          title: `productsItem${index + 1}`,
          category: product.category,
          price: `$${product.price}`,
          description: product.description,
        }));

        setMenuItems(formattedMenuItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
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
                  {t(`products.items.${item.title}.name`)}
                </div>
                <div className="menu-list">
                  <img
                    src={item.imageUrl}
                    className="menu-listImg"
                    alt={t(`products.items.${item.title}.name`)}
                  />
                  <div className="menu-listItem">
                    <div className="menu-listContent">
                      {t(`products.items.${item.title}.description`)}
                    </div>
                    <div className="menu-listPrice">{item.price}</div>
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
