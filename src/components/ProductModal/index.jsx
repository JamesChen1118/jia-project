import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ProductModal = ({ isOpen, onClose, product }) => {
  const { t } = useTranslation();

  if (!product) return null;

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
        <div
          className="absolute -right-4 -top-4 
                    bg-[rgb(51,51,51)] 
                    w-12 h-12 
                    flex items-center justify-center 
                    rounded-full 
                    shadow-[0_0_10px_rgba(0,0,0,0.3)]
                    border-2 border-[rgba(255,99,71,0.5)]"
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="text-3xl text-[rgb(255,99,71)] 
                       transition-all duration-300 
                       hover:text-[rgb(255,69,0)] hover:scale-125"
          />
        </div>
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
          padding: "20px",
        },
      }}
    >
      <div className="p-6">
        <img
          src={product.image}
          alt={t(`products.items.${product.name}.name`)}
          className="w-full h-[300px] object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-main-color-yellow mb-4">
          {t(`products.items.${product.name}.name`)}
        </h2>
        <p className="text-lg mb-4 text-gray-300">
          {t(`products.items.${product.name}.description`)}
        </p>
        <p className="text-2xl font-bold text-main-color-yellow">
          ${product.price}
        </p>
      </div>
    </Modal>
  );
};

export default ProductModal;
