const CartButton = ({ onClick, type, disabled, value }) => {
  // 基本樣式
  const baseStyle = `
    w-[30px] h-[30px] text-xl font-bold
    rounded-[5px] border-none cursor-pointer 
    transition-all duration-300
    flex items-center justify-center
  `;

  // 不同類型按鈕的樣式
  const buttonStyles = {
    minus: `
      ${baseStyle}
      bg-[rgb(245,222,180)]
      text-black
      hover:bg-[rgba(255,170,13,0.8)]
      hover:text-white
      active:scale-95
    `,
    plus: `
      ${baseStyle}
      bg-[rgb(245,222,180)]
      text-black
      hover:bg-[rgba(255,170,13,0.8)]
      hover:text-white
      active:scale-95
    `,
    delete: `
      ${baseStyle}
      ml-4
      bg-[rgb(255,99,71)]
      text-white
      hover:bg-[rgb(255,69,0)]
      hover:scale-105
      active:scale-95
      shadow-md
    `,
    quantity: `
      text-xl font-bold text-[#0736b8] 
      mx-2.5 px-2.5 py-0.5 
      border border-[rgba(255,170,13,0.8)] 
      rounded-[5px]
      min-w-[30px] 
    `,
  };

  const content = {
    minus: "-",
    plus: "+",
    delete: "×",
    quantity: value,
  };

  // 如果是數量顯示，返回 span
  if (type === "quantity") {
    return <span className={buttonStyles[type]}>{content[type]}</span>;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles[type]}
    >
      {content[type]}
    </button>
  );
};

export default CartButton;
