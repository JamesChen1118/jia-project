import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductModal from "@/components/ProductModal";

const ProductItem = ({ image, category, name, price, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { t } = useTranslation();

  const handleCardClick = (e) => {
    if (!e.target.closest(".quantity-controls")) {
      setIsModalOpen(true);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className="bg-[rgb(120,117,117)] rounded-[10px] overflow-hidden 
                 shadow-[0_0_5px_rgba(0,0,0,0.1)] 
                 transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,170,13,0.5)]
                 active:scale-95 cursor-pointer"
      >
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-5">
            <h3 className="block text-xl text-[rgb(240,201,130)] font-bold tracking-[2px] mb-2.5">
              {name}
            </h3>
            <div
              className="quantity-controls flex items-center mt-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-[30px] h-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] 
                         text-black cursor-pointer transition-all duration-300 
                         hover:bg-[rgba(255,170,13,0.8)] active:scale-95"
              >
                -
              </button>
              <label
                className="mx-2.5 text-xl text-[#3e0de0] font-bold w-[60px] 
                              text-center border border-[rgba(255,170,13,0.5)] 
                              rounded-[5px] py-1.5"
              >
                {quantity}
              </label>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-[30px] h-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] 
                         text-black cursor-pointer transition-all duration-300 
                         hover:bg-[rgba(255,170,13,0.8)] active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ image, category, name, price, description }}
      />
    </>
  );
};

export default ProductItem;
