import { Link } from "react-router-dom";
import "./index.css";

// TODO購物車畫面待設計
const ShoppingCart = () => {
  return (
    <>
      <div class="checkoutList">
        <div class="cart">
          <div className="cart-top">
            <Link to="/order" className="backOrder">
              繼續選購
            </Link>
            <h1 className="cart-title">購物車品項</h1>
          </div>
          <div className="line">.</div>

          <div class="cart-list">
            <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="item-name">鮪魚壽司</div>
              <div class="item-price">$ 48</div>
              <div className="cart-btn">
                <button className="btnMinus">-</button>
                <label className="item-num" type="number">
                  0
                </label>
                <button className="btnAdd">+</button>
                <button className="btnDel">x</button>
              </div>
            </div>
            <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="item-name">鮪魚壽司</div>
              <div class="item-price">$ 48</div>
              <div className="cart-btn">
                <button className="btnMinus">-</button>
                <label className="item-num" type="number">
                  0
                </label>
                <button className="btnAdd">+</button>
                <button className="btnDel">x</button>
              </div>
            </div>
            <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="item-name">鮪魚壽司</div>
              <div class="item-price">$ 48</div>
              <div className="cart-btn">
                <button className="btnMinus">-</button>
                <label className="item-num" type="number">
                  0
                </label>
                <button className="btnAdd">+</button>
                <button className="btnDel">x</button>
              </div>
            </div>
          </div>
          <div className="total-box">
            <label htmlFor="" className="total-text">
              總金額 :{" "}
            </label>
            <label type="number" className="total-price">
              $0
            </label>
          </div>
        </div>
        <div className="checkoutBox">
          <div className="check-title">信用卡付款資訊</div>
          <div className="ccBox">
            <div className="check-number">
              <label htmlFor="">信用卡卡號:</label>
              <input className="checkNum1" type="password" required></input>
              <input className="checkNum2" type="password" required></input>
              <input className="checkNum3" type="password" required></input>
              <input className="checkNum4" type="password" required></input>
            </div>
            <div className="cc-info">
              <div class="cc-time">
                <label>有效日期:</label>
                <input
                  type="text"
                  className="cc-year"
                  placeholder="年份"
                  required
                />
                <input
                  type="text"
                  className="cc-month"
                  placeholder="月份"
                  required
                />
                <button className="date-picker">選擇</button>
              </div>
            </div>
            <div className="ccv-check">
              <label className="ccv-title">檢查碼:</label>
              <input
                type="text"
                className="ccv-number"
                placeholder="請輸入"
                required
              ></input>
            </div>
            <button className="checkOut-btn">確認付款</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
