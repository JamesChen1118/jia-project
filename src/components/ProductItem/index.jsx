import "./index.css";

const ProductItem = ({ image, category, name, price }) => {
  return (
    <div className="product-item">
      <div className="product-banner">
        <img src={image} alt="" />
        <div className="product-content">
          <h3 className="product-category">{category}</h3>
          <a href="#" className="product-title">
            <h3>{name}</h3>
          </a>
          <div className="product-price">
            <p>${price}</p>
          </div>
          <div className="price-btn">
            <button className="btnMinus">-</button>
            <label type="number">0</label>
            <button className="btnAdd">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
