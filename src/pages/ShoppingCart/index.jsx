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
              <div class="info">
                <div class="item-name">鮪魚壽司</div>
                <br />
                <div class="item-price">$48</div>
              </div>
              <div class="item-quantity">5</div>
              {/* <div class="returnPrice">$433.3</div> */}
            </div>
            <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="info">
                <div class="item-name">鮪魚壽司</div>
                <br />
                <div class="item-price">$48</div>
              </div>
              <div class="item-quantity">5</div>
              {/* <div class="returnPrice">$433.3</div> */}
            </div> <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="info">
                <div class="item-name">鮪魚壽司</div>
                <br />
                <div class="item-price">$48</div>
              </div>
              <div class="item-quantity">5</div>
              {/* <div class="returnPrice">$433.3</div> */}
            </div> <div class="cart-item">
              <img src="https://picsum.photos/id/684/600/400" alt="" />
              <div class="info">
                <div class="item-name">鮪魚壽司</div>
                <br />
                <div class="item-price">$48</div>
              </div>
              <div class="item-quantity">5</div>
              {/* <div class="returnPrice">$433.3</div> */}
            </div>


          </div>
        </div>

        <div className="checkoutBox">
          <div className="checkItem">
            <label htmlFor="checkout-text">總金額 : </label>
            <input
              type="text"
              id="checkoutInput"
              className="checkout-text"
              placeholder=""
              required
            /></div>
          <div className="checkItem">
            <label htmlFor="checkout-text">付款方式 :</label>
            <select
              id=""
              className="checkout-select"
              required
            >
              <option value="" disabled selected>
                請選擇付款方式
              </option>
              <option value="">貨到付款</option>
              <option value="">超商繳費</option>
              <option value="">線上刷卡</option>
            </select>
          </div>
          <div className="line">.</div>


        </div>
      </div >
    </>
  );
};

export default ShoppingCart;
