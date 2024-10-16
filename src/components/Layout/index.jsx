import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      {/* --------------- Navbar 導覽列 ---------------*/}
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
            <button className="icon-login" type="button">
              登入
            </button>
            <button className="icon-tran" type="button">
              翻譯
            </button>
          </div>
        </nav>
      </div>

      {/* --------------- Banner 頁首大圖區域 ---------------*/}
      <div className="banner">
        <div className="banner-title">
          <h3>JIA</h3>
          <p>Modern Creative Izakaya</p>
        </div>
        <img src="/src/assets/images/home/banner-1.png" alt="" />
      </div>
      {children}
      {/* --------------- Footer 頁尾區域 ---------------*/}
      <div className="footer">
        <h2 className="footer-logo">J I A</h2>
        <p>&copy; JIA 2024 - Modern Creative Izakaya</p>
        <div className="footer-media">
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
