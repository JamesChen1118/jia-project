const ProductItem = ({ image, category, name, price }) => {
  return (
    <div className="bg-[rgb(120,117,117)] rounded-[10px] overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div>
        <img src={image} alt="" className="w-full h-auto" />
        <div className="p-5">
          <h3 className="block text-xl text-[rgb(240,201,130)] font-bold tracking-[2px] mb-2.5">
            {category}
          </h3>
          <a href="#" className="group">
            <h3 className="inline-block text-white text-2xl font-bold text-center p-1.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-main-color-yellow after:transition-transform after:duration-300 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100">
              {name}
            </h3>
          </a>
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
  );
};

export default ProductItem;
