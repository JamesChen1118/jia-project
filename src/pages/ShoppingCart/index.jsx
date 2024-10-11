import { Link } from "react-router-dom";
const ShoppingCart = () => {
  return (
    <>
      <div className="wrapper">
        {/* <!-- --------- Navbar 導覽列  --------- --> */}
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
        <div className="banner">
          <div className="banner-title">
            <h3>JIA</h3>
            <p>Modern Creative Izakaya</p>
          </div>
          <img src="/src/assets/images/home/banner-1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
