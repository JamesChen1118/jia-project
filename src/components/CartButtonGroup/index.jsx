import React from "react";

const CartButtonGroup = ({ onIncrease, onDecrease, quantity }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        className="px-2 py-1 bg-main-color-yellow text-black rounded hover:bg-[rgb(255,120,0)] transition-colors"
      >
        -
      </button>
      <span className="text-main-color-yellow">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-2 py-1 bg-main-color-yellow text-black rounded hover:bg-[rgb(255,120,0)] transition-colors"
      >
        +
      </button>
    </div>
  );
};

export default CartButtonGroup;
