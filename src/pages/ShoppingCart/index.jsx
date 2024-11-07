import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import { useCartStore } from "@/store/shopping";
import CartButton from "@/components/CartButton";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { cartItems, updateQuantity, removeItem } = useCartStore();

  // 付款表單狀態
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumbers: ["", "", "", ""],
    expiryYear: "",
    expiryMonth: "",
    cvv: "",
  });

  // 購物車表單處理
  const handleCartSubmit = (e) => {
    e.preventDefault();
    // 處理購物車更新
    console.log("購物車更新:", cartItems);
  };

  // 付款表單處理
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // 處理付款
    console.log("付款資訊:", paymentInfo);
  };

  // 其他處理函數...
  const handleCardNumberChange = (index, value) => {
    const newCardNumbers = [...paymentInfo.cardNumbers];
    newCardNumbers[index] = value;
    setPaymentInfo({
      ...paymentInfo,
      cardNumbers: newCardNumbers,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.numbers,
    0
  );

  return (
    <>
      <ScrollToContent />
      <div className="flex flex-col lg:flex-row items-start p-5 mx-[50px] mb-[150px] gap-8">
        {/* 購物車表單 */}
        <form
          onSubmit={handleCartSubmit}
          className="w-full lg:w-1/2 lg:mx-[100px] order-1 lg:order-1"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <button
              onClick={() => navigate("/order")}
              className="text-[rgb(255,147,59)] mb-4 sm:mb-0 sm:mr-[250px] 
                        border-none bg-transparent cursor-pointer
                        transition-all duration-500 hover:border-b-2 hover:border-dotted 
                        hover:border-main-color-yellow hover:scale-105 hover:tracking-wider 
                        hover:text-[rgb(255,190,77)]"
            >
              {t("cart.continue")}
            </button>
            <h1 className="text-2xl sm:text-[28px] font-bold text-main-color-yellow shadow-text">
              {t("cart.title")}
            </h1>
          </div>
          <hr className="border-t-2 border-dotted border-main-color-yellow my-2.5" />

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center 
                 text-center p-4 rounded-[20px] bg-[#b6acace1] 
                 border border-white/20 shadow-md gap-4 sm:gap-0"
              >
                <div className="flex-1 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 min-w-0">
                  <img
                    src={item.image}
                    alt={t(`products.items.${item.name}.name`)}
                    className="h-20 rounded-[50px] p-2.5"
                  />
                  <div className="text-xl font-bold text-[rgb(245,222,180)] shadow-text truncate">
                    {t(`products.items.${item.name}.name`)}
                  </div>
                  <div className="font-bold shadow-text text-main-color-yellow text-[22px]">
                    $ {item.price}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:ml-auto sm:w-[180px] justify-end">
                  <CartButton
                    type="minus"
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.numbers === 0}
                  />
                  <CartButton type="quantity" value={item.numbers} />
                  <CartButton
                    type="plus"
                    onClick={() => updateQuantity(item.id, 1)}
                  />
                  <CartButton
                    type="delete"
                    onClick={() => removeItem(item.id)}
                  />
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
        </form>

        <form
          onSubmit={handlePaymentSubmit}
          className="w-full lg:w-[500px] min-h-[500px] bg-white/30 rounded-[20px] p-6 sm:p-8 
               border-3 border-white/20 shadow-lg order-2 lg:order-2
               sticky top-[100px]
               flex flex-col"
        >
          <div
            className="text-2xl sm:text-[28px] font-bold text-main-color-yellow 
                  shadow-text text-center mb-5"
          >
            {t("cart.payment.title")}
          </div>

          <hr className="border-t-2 border-dotted border-main-color-yellow my-2.5" />

          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label
                className="whitespace-nowrap tracking-wider shadow-text 
                       text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.cardNumber")}:
              </label>
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength="4"
                    pattern="\d{4}"
                    value={paymentInfo.cardNumbers[index]}
                    onChange={(e) =>
                      handleCardNumberChange(index, e.target.value)
                    }
                    className="w-16 text-center py-1 bg-transparent 
                              border border-main-color-yellow 
                              outline-none text-lg text-main-color-yellow 
                              tracking-[5px] focus:border-2 
                              focus:border-main-color-yellow"
                    required
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label
                className="whitespace-nowrap tracking-wider shadow-text 
                       text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.expiry")}:
              </label>
              <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                <input
                  type="text"
                  name="expiryYear"
                  placeholder={t("cart.payment.year")}
                  value={paymentInfo.expiryYear}
                  onChange={handleInputChange}
                  maxLength="4"
                  pattern="\d{4}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                  className="w-24 text-center py-2 bg-transparent 
                            border border-main-color-yellow 
                            outline-none text-lg text-main-color-yellow 
                            tracking-[5px] placeholder:text-[rgb(255,120,0)]
                            focus:border-2 focus:border-main-color-yellow"
                />
                <input
                  type="text"
                  name="expiryMonth"
                  placeholder={t("cart.payment.month")}
                  value={paymentInfo.expiryMonth}
                  onChange={handleInputChange}
                  maxLength="2"
                  pattern="\d{2}"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                  className="w-24 text-center py-2 bg-transparent 
                            border border-main-color-yellow 
                            outline-none text-lg text-main-color-yellow 
                            tracking-[5px] placeholder:text-[rgb(255,120,0)]
                            focus:border-2 focus:border-main-color-yellow"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label
                className="whitespace-nowrap tracking-wider shadow-text 
                       text-main-color-yellow text-lg font-bold"
              >
                {t("cart.payment.cvv")}:
              </label>
              <input
                type="text"
                name="cvv"
                placeholder={t("cart.payment.cvv")}
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                maxLength="3"
                pattern="\d{3}"
                inputMode="numeric"
                autoComplete="off"
                required
                className="w-20 text-center py-1 bg-transparent 
                          border border-main-color-yellow 
                          outline-none text-lg text-main-color-yellow 
                          tracking-[5px] placeholder:text-[rgb(255,120,0)]
                          focus:border-2 focus:border-main-color-yellow"
              />
            </div>

            <button
              type="submit"
              className="text-lg mt-auto mb-4 px-5 py-2 bg-main-color-yellow 
                rounded-xl border border-main-color-yellow font-bold 
                text-black outline-none tracking-[3px] transition-all 
                duration-300 shadow-md self-center
                hover:bg-[rgb(255,120,0)] hover:text-[#f0e68c] 
                hover:border-[rgb(255,120,0)] active:scale-90 
                active:shadow-sm"
            >
              {t("cart.payment.confirm")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShoppingCart;
