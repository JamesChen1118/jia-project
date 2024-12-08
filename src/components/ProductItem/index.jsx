import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCartStore } from "@/store/shopping";
import CartButton from "@/components/CartButton";
import Swal from "sweetalert2";

const ProductItem = ({ _id, image, name, price, description }) => {
  const { t } = useTranslation();
  const { cartItems, addToCart, updateQuantity } = useCartStore();

  const currentItem = cartItems.find((item) => item._id === _id);
  const currentQuantity = currentItem ? currentItem.numbers : 0;

  const handleQuantityChange = (change) => {
    if (change > 0) {
      addToCart(
        {
          _id,
          name,
          price,
          image,
        },
        1
      );

      Swal.fire({
        title: t(`products.items.${name}.name`),
        text: t("cart.addSuccess"),
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        position: "top",
        toast: true,
        width: "auto",
        padding: "0.5em",
        background: "#333",
        color: "#ffc107",
        iconColor: "#ffc107",
        customClass: {
          popup: "colored-toast",
          title: "text-sm",
          content: "text-xs",
        },
      });
    } else if (change < 0 && currentQuantity > 0) {
      updateQuantity(_id, -1);
    }
  };

  return (
    <div className="bg-[rgb(120,117,117)] rounded-[10px] overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[250px] object-cover cursor-pointer"
        />
        <div className="absolute top-0 right-0 bg-main-color-yellow px-[15px] py-[5px] text-xl rounded-tr-[10px] rounded-bl-[10px]">
          <span className="text-black font-extrabold">${price}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl text-[rgb(240,201,130)] font-bold tracking-[2px] mb-2.5 h-[60px] flex items-center justify-center cursor-pointer">
          {t(`products.items.${name}.name`)}
        </h3>

        <div className="rounded-lg p-3">
          <div className="quantity-controls flex justify-center items-center gap-2">
            <CartButton
              type="minus"
              onClick={() => handleQuantityChange(-1)}
              disabled={currentQuantity === 0}
            />
            <CartButton type="quantity" value={currentQuantity} />
            <CartButton type="plus" onClick={() => handleQuantityChange(1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
