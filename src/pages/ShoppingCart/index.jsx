import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const ShoppingCart = () => {
  const { t } = useTranslation();
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
              {t("cart.continue")}
            </Link>
            <h1 className="cart-title">{t("cart.title")}</h1>
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
            <label className="total-text">{t("cart.total")} :</label>
            <label className="total-price">$ {totalAmount}</label>
          </div>
        </div>
        <div className="checkoutBox">
          <div className="check-title">{t("cart.payment.title")}</div>
          <hr className="line" />
          <div className="ccBox">
            <div className="check-number">
              <label>{t("cart.payment.cardNumber")}:</label>
              {[1, 2, 3, 4].map((index) => (
                <input
                  key={index}
                  className="checkNum"
                  type="password"
                  maxLength="4"
                  pattern="\d{4}"
                  autoComplete="off"
                  required
                />
              ))}
            </div>
            <div className="cc-info">
              <div className="cc-time">
                <label>{t("cart.payment.expiry")}:</label>
                <input
                  type="text"
                  id="cc-year"
                  placeholder={t("cart.payment.year")}
                  maxLength="4"
                  pattern="\d{4}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
                <input
                  type="text"
                  id="cc-month"
                  placeholder={t("cart.payment.month")}
                  maxLength="2"
                  pattern="\d{2}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="ccv-check">
              <label className="ccv-title">{t("cart.payment.cvv")}:</label>
              <input
                type="text"
                id="ccv-number"
                placeholder={t("cart.payment.cvv")}
                maxLength="3"
                pattern="\d{3}"
                inputMode="numeric"
                autoComplete="off"
                required
              />
            </div>
            <button className="checkOut-btn">
              {t("cart.payment.confirm")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
