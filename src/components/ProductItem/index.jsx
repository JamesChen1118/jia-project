import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCartStore } from "@/store/shopping";
import CartButton from "@/components/CartButton";
import Swal from "sweetalert2";

const ProductItem = ({
  id,
  image,
  name,
  price,
  description,
  onImageClick,
  onTitleClick,
}) => {
  const { t } = useTranslation();
  const { cartItems, addToCart, updateQuantity } = useCartStore();

  // 查找當前商品在購物車中的數量
  const currentItem = cartItems.find((item) => item.name === name);
  const currentQuantity = currentItem ? currentItem.numbers : 0;

  const handleQuantityChange = (change) => {
    if (change > 0) {
      // 添加到購物車
      addToCart({ id, name, price, image }, 1);
      Swal.fire({
        title: t(`products.items.${name}.name`),
        text: t("cart.addSuccess"),
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#333",
        color: "#ffc107",
        iconColor: "#ffc107",
        customClass: {
          popup: "colored-toast",
        },
      });
    } else if (change < 0 && currentQuantity > 0) {
      // 從購物車中減少
      updateQuantity(currentItem.id, -1);
    }
  };

  return (
    <div className="bg-[rgb(120,117,117)] rounded-[10px] overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[250px] object-cover cursor-pointer"
          onClick={onImageClick}
        />
        <div className="absolute top-0 right-0 bg-main-color-yellow px-[15px] py-[5px] text-xl rounded-tr-[10px] rounded-bl-[10px]">
          <span className="text-black font-extrabold">${price}</span>
        </div>
      </div>

      <div className="p-4">
        <h3
          className="text-2xl text-[rgb(240,201,130)] font-bold tracking-[2px] mb-2.5 h-[60px] flex items-center justify-center cursor-pointer"
          onClick={onTitleClick}
        >
          {t(`products.items.${name}.name`)}
        </h3>

        <div className="rounded-lg p-3">
          <div className="quantity-controls flex justify-center items-center gap-2">
            <CartButton
              type="minus"
              onClick={() => handleQuantityChange(-1)}
              disabled={currentQuantity === 0}
            />
            <div
              className="mx-1.5 text-2xl text-main-color-yellow font-bold w-[50px] 
                                    border-2 border-[rgba(255,170,13,0.5)] 
                                    rounded-[5px] py-1.5
                                    bg-[rgba(0,0,0,0.2)] 
                                    flex items-center justify-center"
            >
              {currentQuantity}
            </div>
            <CartButton type="plus" onClick={() => handleQuantityChange(1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
