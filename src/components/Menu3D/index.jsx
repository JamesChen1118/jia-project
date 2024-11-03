import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { productApi } from "@/api/product.js";
import "@/components/Menu3D/index.css";
import "@/assets/css/index.css";

const Menu3D = () => {
  const [openImageId, setOpenImageId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productApi.searchProducts("全部");
        const selectedProducts = products.slice(0, 12);

        const formattedMenuItems = selectedProducts.map((product) => ({
          id: product._id,
          imageUrl: product.image,
          title: product.name,
          price: `$${product.price}`,
          description: product.description,
        }));

        setMenuItems(formattedMenuItems);
      } catch (error) {
        console.error("Failed to fetch products:", error);
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
                    <NavLink to="/menu" className="toMenu">
                      前往菜單
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
