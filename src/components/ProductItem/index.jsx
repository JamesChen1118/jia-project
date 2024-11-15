import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductModal from "@/components/ProductModal";
import { useCartStore } from "@/store/shopping";
import Swal from "sweetalert2";
import CartButton from "@/components/CartButton";

const ProductItem = ({ id, image, category, name, price, description }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const currentItem = cartItems.find((item) => item.name === name);
  const quantity = currentItem ? currentItem.quantity : 0;

  const addToCart = useCartStore((state) => state.addToCart);

  const handleCardClick = (e) => {
    if (!e.target.closest(".quantity-controls")) {
      setIsModalOpen(true);
    }
  };

  const handleQuantityChange = (change) => {
    if (change > 0) {
      addToCart({ id, name, price, image }, 1);
      Swal.fire({
        title: `${t(`products.items.${name}.name`)}`,
        text: t("cart.addSuccess"),
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#333",
        color: "#ffc107",
        iconColor: "#ffc107",
      });
    } else if (change < 0 && quantity > 0) {
      addToCart({ id, name, price, image }, -1);
      Swal.fire({
        title: `${t(`products.items.${name}.name`)}`,
        text: t("cart.updateSuccess"),
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#333",
        color: "#ffc107",
        iconColor: "#ffc107",
      });
    }
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className="bg-[rgb(120,117,117)] rounded-[10px] overflow-hidden..."
      >
        <div>
          <div className="relative">
            <img
              src={image}
              alt={t(`products.items.${name}.name`)}
              className="w-full h-[250px] object-cover"
            />
            <div
              className="absolute top-0 right-0 bg-main-color-yellow px-[15px] py-[5px] text-xl
                    rounded-tr-[10px] rounded-bl-[10px]"
            >
              <span className="text-black font-extrabold">${price}</span>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-2xl text-[rgb(240,201,130)] font-bold tracking-[2px] mb-2.5 h-[60px] flex items-center justify-center">
              {t(`products.items.${name}.name`)}
            </h3>
            <div className="rounded-lg p-3">
              <div
                className="quantity-controls flex justify-center items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <CartButton
                  type="minus"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity === 0}
                />

                <div
                  className="mx-1.5 text-2xl text-main-color-yellow font-bold w-[50px] 
                             border-2 border-[rgba(255,170,13,0.5)] 
                             rounded-[5px] py-1.5
                             bg-[rgba(0,0,0,0.2)] 
                             flex items-center justify-center"
                >
                  {quantity}
                </div>

                <CartButton
                  type="plus"
                  onClick={() => handleQuantityChange(1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          image,
          category,
          name,
          price,
          description,
        }}
      />
    </>
  );
};

export default ProductItem;
