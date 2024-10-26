import React from "react";
import { Link } from "react-router-dom";
import "@/components/Layout/Header/index.css";
import "@/components/Buttons/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShoppingCart,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header fixed top-0 left-0 w-full z-10">
      <nav className="px-5 w-full h-24 flex justify-between items-center bg-[rgba(26,26,26,0.7)]">
        <h2 className="logo pl-[60px]">
          <Link
            to="/"
            className="text-main-color-yellow no-underline font-sans font-bold text-2xl"
          >
            J I A
          </Link>
        </h2>
        <ul className="nav-list flex">
          <li className="nav-item px-10 text-xl">
            <Link
              to="/about"
              className="text-white hover:text-main-color-yellow no-underline"
            >
              關於JIA
            </Link>
          </li>
          <li className="nav-item px-10 text-xl">
            <Link
              to="/news"
              className="text-white hover:text-main-color-yellow no-underline"
            >
              最新消息
            </Link>
          </li>
          <li className="nav-item px-10 text-xl">
            <Link
              to="/booking"
              id="bookingBtn"
              className="px-5 py-2.5 bg-main-color-yellow rounded-xl font-medium text-black"
            >
              我要預訂
            </Link>
          </li>
          <li className="nav-item px-10 text-xl">
            <Link
              to="/menu"
              className="text-white hover:text-main-color-yellow no-underline"
            >
              菜單底JIA
            </Link>
          </li>
          <li className="nav-item px-10 text-xl">
            <Link
              to="/contact"
              className="text-white hover:text-main-color-yellow no-underline"
            >
              聯繫我JIA
            </Link>
          </li>
        </ul>
        <div className="nav-btn flex items-center">
          <Link
            to="/login"
            className="icon-btn text-white text-2xl p-1.5 transition-all duration-300 ease-in-out hover:text-main-color-yellow hover:scale-110 cursor-pointer"
          >
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
          <Link
            to="/shoppingCart"
            className="icon-btn text-white text-2xl p-1.5 transition-all duration-300 ease-in-out hover:text-main-color-yellow hover:scale-110 cursor-pointer"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <button className="icon-btn text-white text-2xl p-1.5 transition-all duration-300 ease-in-out hover:text-main-color-yellow hover:scale-110 cursor-pointer">
            <FontAwesomeIcon icon={faGlobe} />
            <span className="icon-text"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
