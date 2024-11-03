import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { productApi } from "@/api/product.js";
import i18n from "@/i18n";
import "@/components/Menu3D/index.css";
import "@/assets/css/index.css";

const Menu3D = () => {
  const [openImageId, setOpenImageId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await productApi.searchProducts("全部");
        console.log("Fetched products:", products);
        const selectedProducts = products.slice(0, 12);

        const formattedMenuItems = selectedProducts.map((product) => ({
          id: product._id,
          imageUrl: product.image,
          title: product.name,
          category: i18n.t(`categories.${product.category}`),
          price: `$${product.price}`,
          description: product.description,
        }));

        setMenuItems(formattedMenuItems);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    const handleLanguageChange = () => {
      fetchProducts();
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  if (loading) return <div>載入中...</div>;
  if (error) return <div>錯誤: {error}</div>;
  if (!menuItems.length) return <div>沒有商品資料</div>;

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
                    <div className="menu-listContent">
                      {item.category} - {item.description}
                    </div>
                    <div className="menu-listPrice">{item.price}</div>
                    <NavLink to="/menu" className="toMenu">
                      {i18n.t("Menu")}
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
