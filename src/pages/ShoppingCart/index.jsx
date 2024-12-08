import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import { useCartStore } from "@/store/shopping";
import CartButton from "@/components/CartButton";
import { orderApi } from "@/api/module/order.js";
import { useAuthStore } from "@/store/auth";
import Swal from "sweetalert2";
import GoTop from "@/components/GoTop";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLoggedIn } = useAuthStore();
  const { cartItems, updateQuantity, removeItem, clearCart } = useCartStore();
  const totalAmount = useCartStore((state) => state.getTotalAmount());

  const initForm = {
    cardNumbers: ["", "", "", ""],
    expiryYear: "",
    expiryMonth: "",
    cvv: "",
  };

  const [paymentInfo, setPaymentInfo] = useState(initForm);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isLoggedIn) {
        Swal.fire({
          title: t("message.login.required"),
          text: t("message.login.checkoutHint"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: t("login.submit"),
          cancelButtonText: t("common.cancel"),
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
        return;
      }

      const order = {
        orderItems: cartItems.map((item) => ({
          id: item._id,
          name: item.name,
          numbers: item.numbers,
          price: item.price,
        })),
        paymentInfo: {
          cardNumbers: paymentInfo.cardNumbers.join(""),
          expiryMonth: paymentInfo.expiryMonth,
          expiryYear: paymentInfo.expiryYear,
          cvv: paymentInfo.cvv,
        },
        totalPrice: totalAmount,
      };

      await orderApi.addOrder(order);

      Swal.fire({
        title: "付款成功！",
        text: "訂單已成功建立",
        icon: "success",
        confirmButtonText: "確定",
      }).then(() => {
        clearCart();
        setPaymentInfo(initForm);
        navigate("/member");
      });
    } catch (error) {
      console.error("Payment error:", error);
      Swal.fire({
        title: "付款失敗",
        text: error.message || "請稍後再試",
        icon: "error",
        confirmButtonText: "確定",
      });
    }
  };

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

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="flex flex-col lg:flex-row items-start p-5 mx-[50px] mb-[150px] gap-8">
        <div className="w-full lg:w-1/2 lg:mx-[100px] order-1 lg:order-1">
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
                key={item._id}
                className="flex items-center justify-between mb-4 p-4 rounded-[20px] bg-[#b6acace1] 
                 border border-white/20 shadow-md"
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

                <div className="flex items-center">
                  <CartButton
                    type="minus"
                    onClick={() => updateQuantity(item._id, -1)}
                    disabled={item.numbers <= 1}
                  />
                  <CartButton type="quantity" value={item.numbers} />
                  <CartButton
                    type="plus"
                    onClick={() => updateQuantity(item._id, 1)}
                  />
                  <CartButton
                    type="delete"
                    onClick={() => removeItem(item._id)}
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
        </div>

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
                  className="w-[83px] text-center py-1 bg-transparent 
                            border border-main-color-yellow 
                            outline-none text-lg text-main-color-yellow 
                            tracking-[5px] placeholder:text-white
                            focus:border-2 focus:border-main-color-yellow
                            rounded-[5px]"
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
                  className="w-[83px] text-center py-1 bg-transparent 
                            border border-main-color-yellow 
                            outline-none text-lg text-main-color-yellow 
                            tracking-[5px] placeholder:text-white
                            focus:border-2 focus:border-main-color-yellow
                            rounded-[5px]"
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
                          tracking-[5px] placeholder:text-white
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
