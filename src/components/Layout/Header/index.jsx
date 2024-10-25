import React from "react";
import { Link } from "react-router-dom";
import "@/components/Layout/Header/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faShoppingCart,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <h2 className="logo">
          <Link to="/">J I A</Link>
        </h2>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about">關於JIA</Link>
          </li>
          <li className="nav-item">
            <Link to="/news">最新消息</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" id="bookingBtn">
              我要預訂
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">菜單底JIA</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">聯繫我JIA</Link>
          </li>
        </ul>
        <div className="nav-btn">
          <Link to="/login" className="icon-btn" type="button">
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
          <Link to="/shoppingCart" className="icon-btn" type="button">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <button className="icon-btn" type="button">
            <FontAwesomeIcon icon={faLanguage} />
            <span className="icon-text"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
