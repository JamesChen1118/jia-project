// src/components/CartButton/index.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartButton = ({ type, value, onClick, disabled }) => {
  const getButtonContent = () => {
    switch (type) {
      case "minus":
        return "-";
      case "plus":
        return "+";
      case "delete":
        return (
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-base" // 設定圖示大小
          />
        );
      case "quantity":
        return (
          <span
            className="
              text-xl font-bold text-[#0736b8] 
              mx-2.5 px-2.5 py-0.5 
              border border-[rgba(255,170,13,0.8)] 
              rounded-[5px]
              min-w-[30px] 
              text-center
            "
          >
            {value}
          </span>
        );
      default:
        return "";
    }
  };

  if (type === "quantity") {
    return getButtonContent();
  }

  // 基本按鈕樣式
  const baseButtonStyle = `
    w-[30px] h-[30px] 
    text-xl font-bold
    rounded-[5px] 
    border-none 
    cursor-pointer 
    transition-all duration-300
    flex items-center justify-center
  `;

  // 刪除按鈕特殊樣式
  const deleteButtonStyle = `
    ml-4 
    bg-[rgb(255,99,71)] 
    text-white 
    hover:bg-[rgb(255,69,0)] 
    hover:scale-105
  `;

  // 一般按鈕樣式
  const normalButtonStyle = `
    bg-[rgb(245,222,180)] 
    text-black 
    hover:bg-[rgba(255,170,13,0.8)] 
    hover:text-white
  `;

  // 禁用狀態樣式
  const disabledStyle = "opacity-50 cursor-not-allowed";
  const activeStyle = "active:scale-95";

  // 組合最終樣式
  const finalClassName = `
    ${baseButtonStyle}
    ${type === "delete" ? deleteButtonStyle : normalButtonStyle}
    ${disabled ? disabledStyle : activeStyle}
  `;

  return (
    <button onClick={onClick} disabled={disabled} className={finalClassName}>
      {getButtonContent()}
    </button>
  );
};

export default CartButton;
