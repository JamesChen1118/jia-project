import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

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
      <ScrollToContent />
      <div className="flex flex-col lg:flex-row items-stretch p-5 mx-[50px] mb-[150px] gap-8">
        <div className="w-full lg:w-1/2 lg:mx-[100px] order-1 lg:order-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <Link
              to="/order"
              className="text-[rgb(255,147,59)] mb-4 sm:mb-0 sm:mr-[250px] no-underline 
                       transition-all duration-500 hover:border-b-2 hover:border-dotted 
                       hover:border-main-color-yellow hover:scale-105 hover:tracking-wider 
                       hover:text-[rgb(255,190,77)]"
            >
              {t("cart.continue")}
            </Link>
            <h1 className="text-2xl sm:text-[28px] font-bold text-main-color-yellow shadow-text">
              {t("cart.title")}
            </h1>
          </div>
          <hr className="border-t-2 border-dotted border-main-color-yellow my-2.5" />

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-around items-center 
                            text-center p-4 rounded-[20px] bg-[#b6acace1] 
                            border border-white/20 shadow-md gap-4 sm:gap-0"
              >
                <img
                  src="https://picsum.photos/id/684/600/400"
                  alt=""
                  className="h-20 rounded-[50px] p-2.5"
                />
                <div className="text-xl font-bold text-[rgb(245,222,180)] shadow-text">
                  {item.name}
                </div>
                <div className="font-bold shadow-text text-main-color-yellow text-[22px]">
                  $ {item.price}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateNumber(item.id, -1)}
                    className="w-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] 
                             border-none text-black cursor-pointer transition-colors 
                             duration-300 hover:bg-[rgba(255,170,13,0.8)]"
                  >
                    -
                  </button>
                  <span
                    className="text-xl font-bold text-[#0736b8] mx-2.5 px-2.5 
                                 py-0.5 border border-[rgba(255,170,13,0.8)] rounded-[5px]"
                  >
                    {item.numbers}
                  </span>
                  <button
                    onClick={() => updateNumber(item.id, 1)}
                    className="w-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] 
                             border-none text-black cursor-pointer transition-colors 
                             duration-300 hover:bg-[rgba(255,170,13,0.8)]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 border-none rounded-[5px] cursor-pointer text-xl 
                             font-bold text-center bg-[rgb(226,99,99)] w-[30px] h-[30px] 
                             flex items-center justify-center hover:bg-[rgb(227,62,62)] 
                             hover:text-white transition-colors duration-300"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 text-2xl sm:text-[28px] font-bold shadow-text 
                         text-main-color-yellow flex justify-end items-center 
                         flex-wrap gap-4"
          >
            <span className="tracking-wider">{t("cart.total")} :</span>
            <span className="tracking-[15px] underline decoration-double">
              $ {totalAmount}
            </span>
          </div>
        </div>

        <div
          className="w-full lg:w-[45%] bg-white/30 rounded-[20px] p-6 sm:p-8 
                       border-3 border-white/20 shadow-lg order-2 lg:order-2"
        >
          <div
            className="text-2xl sm:text-[28px] font-bold text-main-color-yellow 
                         shadow-text text-center mb-5"
          >
            {t("cart.payment.title")}
          </div>
          <hr className="border-t-2 border-dotted border-main-color-yellow my-2.5" />

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <label
                className="whitespace-nowrap mr-2 tracking-wider shadow-text 
                               text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.cardNumber")}:
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength="4"
                    pattern="\d{4}"
                    autoComplete="off"
                    required
                    className="w-16 text-center py-1 bg-transparent border border-main-color-yellow 
                             outline-none text-lg text-main-color-yellow tracking-[5px]
                             focus:border-2 focus:border-main-color-yellow"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label
                className="whitespace-nowrap mr-2 tracking-wider shadow-text 
                               text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.expiry")}:
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={t("cart.payment.year")}
                  maxLength="4"
                  pattern="\d{4}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                  className="w-24 text-center py-2 bg-transparent border border-main-color-yellow 
                           outline-none text-lg text-main-color-yellow tracking-[5px]
                           placeholder:text-[rgb(255,120,0)]
                           focus:border-2 focus:border-main-color-yellow"
                />
                <input
                  type="text"
                  placeholder={t("cart.payment.month")}
                  maxLength="2"
                  pattern="\d{2}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                  className="w-24 text-center py-2 bg-transparent border border-main-color-yellow 
                           outline-none text-lg text-main-color-yellow tracking-[5px]
                           placeholder:text-[rgb(255,120,0)]
                           focus:border-2 focus:border-main-color-yellow"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label
                className="whitespace-nowrap mr-2 tracking-wider shadow-text 
                               text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.cvv")}:
              </label>
              <input
                type="text"
                placeholder={t("cart.payment.cvv")}
                maxLength="3"
                pattern="\d{3}"
                inputMode="numeric"
                autoComplete="off"
                required
                className="w-20 text-center py-1 bg-transparent border border-main-color-yellow 
                         outline-none text-lg text-main-color-yellow tracking-[5px]
                         placeholder:text-[rgb(255,120,0)]
                         focus:border-2 focus:border-main-color-yellow"
              />
            </div>

            <button
              className="text-lg my-6 px-5 py-2 bg-main-color-yellow rounded-xl 
                             border border-main-color-yellow font-bold text-black outline-none 
                             tracking-[3px] transition-all duration-300 shadow-md self-center
                             hover:bg-[rgb(255,120,0)] hover:text-[#f0e68c] hover:border-[rgb(255,120,0)]
                             active:scale-90 active:shadow-sm"
            >
              {t("cart.payment.confirm")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
