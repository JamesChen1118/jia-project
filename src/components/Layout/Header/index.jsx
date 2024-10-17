import { Link } from "react-router-dom";
import "./index.css";

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
          <Link to="/login" className="icon-login" type="button">
            登入
          </Link>
          <button className="icon-tran" type="button">
            翻譯
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
