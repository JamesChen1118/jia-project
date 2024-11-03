import { useState } from "react";
import { Modal } from "antd";

const ProductItem = ({ image, category, name, price, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={showModal}
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
              {category}
            </h3>
            <div className="group">
              <h3
                className="inline-block text-white text-2xl font-bold text-center p-1.5 
                           transition-all duration-300 ease-in-out
                           group-hover:text-main-color-yellow 
                           group-hover:tracking-wider"
              >
                {name}
              </h3>
            </div>
            <div className="text-main-color-yellow text-xl">
              <p>${price}</p>
            </div>
            <div className="flex items-center mt-2.5">
              <button className="w-[30px] h-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] text-black cursor-pointer transition-colors duration-300 hover:bg-[rgba(255,170,13,0.8)]">
                -
              </button>
              <label className="mx-2.5 text-xl text-[#3e0de0] font-bold w-[60px] text-center border border-[rgba(255,170,13,0.5)] rounded-[5px] py-1.5">
                0
              </label>
              <button className="w-[30px] h-[30px] text-xl bg-[rgb(245,222,180)] rounded-[5px] text-black cursor-pointer transition-colors duration-300 hover:bg-[rgba(255,170,13,0.8)]">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={null}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="font-georgia"
        centered
        width={600}
        styles={{
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            backgroundColor: "rgb(51, 51, 51)",
            boxShadow: "0 0 20px rgba(255, 170, 13, 0.3)",
            border: "1px solid rgba(255, 170, 13, 0.2)",
            borderRadius: "15px",
            padding: "0",
          },
        }}
      >
        <div className="p-8">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover rounded-lg mb-6 
                     shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          />
          <h2 className="text-3xl font-bold text-main-color-yellow mb-4 tracking-wider">
            {name}
          </h2>
          <h3 className="text-2xl text-main-color-orange mb-4">{category}</h3>
          <p className="text-lg mb-4 text-gray-300 leading-relaxed">
            {description || "暫無商品描述"}
          </p>
          <p className="text-2xl font-bold text-main-color-yellow">${price}</p>
        </div>
      </Modal>
    </>
  );
};

export default ProductItem;
