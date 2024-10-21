import { Link } from "react-router-dom";
import "./index.css";

// TODO購物車畫面待設計
const ShoppingCart = () => {
  return (
    <>
      <div class="checkoutList">
        <div class="cart">
          <Link to="/order">繼續選購</Link>
          <h1 className="cart-title">購物車品項</h1>
          <div class="cart-list">
            <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="item-name">鮪魚壽司</div>
              <div class="item-price">$48</div>
              <div className="cart-btn">
                <button className="btnMinus">-</button>
                <label className="item-num" type="number">
                  0
                </label>
                <button className="btnAdd">+</button>
                <button className="btnDel">x</button>
              </div>
            </div>

            {/* <div className="cart-content">
              <h1 className="item-name">鮪魚壽司</h1>
              <div className="cart-price">$4</div>
              <div className="cart-btn">
                <button className="btnMinus">-</button>
                <label className="item-num" type="number">
                  0
                </label>
                <button className="btnAdd">+</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="checkoutBox">
          <div className="checkItem">
            <label htmlFor="checkout-text">總金額 : </label>
            <label type="number">0</label>
          </div>

          {/* <div className="line">.</div> */}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
