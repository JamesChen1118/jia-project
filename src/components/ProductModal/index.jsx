import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;
  const { image, name, category, price, description } = product;

  return (
    <Modal
      title={null}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      className="font-georgia"
      centered
      width={600}
      closeIcon={
        <FontAwesomeIcon
          icon={faTimes}
          className="text-2xl text-[rgb(255,99,71)] 
                     transition-all duration-300 
                     hover:text-[rgb(255,69,0)] hover:scale-110"
        />
      }
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
  );
};

export default ProductModal;
