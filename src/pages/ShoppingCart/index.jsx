import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

// TODO購物車畫面待設計
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鮪魚壽司", price: 48, numbers: 1 },
    { id: 2, name: "鮪魚壽司", price: 48, numbers: 1 },
    { id: 3, name: "鮪魚壽司", price: 48, numbers: 1 },
  ]);

  const updateNumber = (id, change) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? { ...item, numbers: Math.max(0, item.numbers + change) }
          : item
      );
      return updatedItems.filter((item) => item.numbers > 0);
    });
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.numbers,
    0
  );

  return (
    <>
      <div className="checkoutList">
        <div className="cart">
          <div className="cart-top">
            <Link to="/order" className="backOrder">
              繼續選購
            </Link>
            <h1 className="cart-title">購物車品項</h1>
          </div>
          <hr className="line" />

          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src="https://picsum.photos/id/684/600/400" alt="" />
                <div className="item-name">{item.name}</div>
                <div className="item-price">$ {item.price}</div>
                <div className="cart-btn">
                  <button
                    className="btnMinus"
                    onClick={() => updateNumber(item.id, -1)}
                  >
                    -
                  </button>
                  <label className="item-num">{item.numbers}</label>
                  <button
                    className="btnAdd"
                    onClick={() => updateNumber(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="btnDel"
                    onClick={() => removeItem(item.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-box">
            <label className="total-text">總金額 :</label>
            <label className="total-price">$ {totalAmount}</label>
          </div>
        </div>
        <div className="checkoutBox">
          <div className="check-title">信用卡付款資訊</div>
          <hr className="line" />
          <div className="ccBox">
            <div className="check-number">
              <label htmlFor="">信用卡卡號:</label>
              <input
                className="checkNum"
                type="password"
                maxLength="4"
                pattern="\d{4}"
                autoComplete="off"
                required
              ></input>
              <input
                className="checkNum"
                type="password"
                maxLength="4"
                pattern="\d{4}"
                autoComplete="off"
                required
              ></input>
              <input
                className="checkNum"
                type="password"
                maxLength="4"
                pattern="\d{4}"
                autoComplete="off"
                required
              ></input>
              <input
                className="checkNum"
                type="password"
                maxLength="4"
                pattern="\d{4}"
                autoComplete="off"
                required
              ></input>
            </div>
            <div className="cc-info">
              <div className="cc-time">
                <label>有效日期:</label>
                <input
                  type="text"
                  id="cc-year"
                  placeholder="年份"
                  maxLength="4"
                  pattern="\d{4}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
                <input
                  type="text"
                  id="cc-month"
                  placeholder="月份"
                  maxLength="2"
                  pattern="\d{2}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />

                {/* <button className="date-picker">選擇</button> */}
              </div>
            </div>
            <div className="ccv-check">
              <label className="ccv-title">檢查碼:</label>
              <input
                type="text"
                id="ccv-number"
                placeholder="請輸入"
                maxLength="3"
                pattern="\d{3}"
                inputMode="numeric"
                autoComplete="off"
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
