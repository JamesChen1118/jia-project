import { Link } from "react-router-dom";
import "./index.css";

const Order = () => {
  return (
    <>
      <div className="main">
        {/* <!-- /* --------- Sidebar 商品分類 --------- */}
        <div className="sidebar">
          <h2 id="product-title">商品分類</h2>
          <ul className="product-categories">
            <li>
              <a className="categories-btn" href="#">
                生食
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                壽司
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                海鮮
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                炸物{" "}
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                燒烤{" "}
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                小品
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                定食{" "}
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                甜點{" "}
              </a>
            </li>
            <li>
              <a className="categories-btn" href="#">
                飲料
              </a>
            </li>
          </ul>

          {/* <!-- /* --------- best-sellers 商品分類 --------- */}

          <div className="best-sellers">
            <h3 id="product-title">排行榜商品</h3>
            <div className="best-sellers-list">
              <div className="best-sellers-item">
                <img
                  className="showcase-img-box"
                  src="https://picsum.photos/id/684/80/80"
                  alt=""
                />
                <div className="product-content">
                  <a href="#" className="product-title">
                    <h3>鮪魚握壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$80.00</p>
                  </div>
                </div>
              </div>
              <div className="best-sellers-item">
                <img
                  className="showcase-img-box"
                  src="https://picsum.photos/id/684/80/80"
                  alt=""
                />
                <div className="product-content">
                  <a href="#" className="product-title">
                    <h3>鮪魚握壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$80.00</p>
                  </div>
                </div>
              </div>
              <div className="best-sellers-item">
                <img
                  className="showcase-img-box"
                  src="https://picsum.photos/id/684/80/80"
                  alt=""
                />
                <div className="product-content">
                  <a href="#" className="product-title">
                    <h3>鮪魚握壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$80.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- /* --------- product 商品 --------- */}

        <div className="product-list">
          <div className="product-grid">
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/684/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">生食</h3>
                  <a href="#" className="product-title">
                    <h3>鮭魚刺身</h3>
                  </a>
                  <div className="product-price">
                    <p>$48.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/685/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">生食</h3>
                  <a href="#" className="product-title">
                    <h3>鮪魚刺身</h3>
                  </a>
                  <div className="product-price">
                    <p>$80.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/686/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">生食</h3>
                  <a href="#" className="product-title">
                    <h3>鯛魚薄造</h3>
                  </a>
                  <div className="product-price">
                    <p>$30.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/687/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">生食</h3>
                  <a href="#" className="product-title">
                    <h3>花枝刺身</h3>
                  </a>
                  <div className="product-price">
                    <p>$60.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/688/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">生食</h3>
                  <a href="#" className="product-title">
                    <h3>北極貝刺身</h3>
                  </a>
                  <div className="product-price">
                    <p>$55.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/689/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">壽司</h3>
                  <a href="#" className="product-title">
                    <h3>鮪魚握壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$85.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/690/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">壽司</h3>
                  <a href="#" className="product-title">
                    <h3>鮭魚握壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$70.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/691/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">壽司</h3>
                  <a href="#" className="product-title">
                    <h3>鮮蝦手卷</h3>
                  </a>
                  <div className="product-price">
                    <p>$45.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/692/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">壽司</h3>
                  <a href="#" className="product-title">
                    <h3>鰻魚壽司</h3>
                  </a>
                  <div classNameName="product-price">
                    <p>$60.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/693/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">壽司</h3>
                  <a href="#" className="product-title">
                    <h3>金槍魚壽司</h3>
                  </a>
                  <div className="product-price">
                    <p>$90.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/694/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">海鮮</h3>
                  <a href="#" className="product-title">
                    <h3>烤大明蝦</h3>
                  </a>
                  <div className="product-price">
                    <p>$35.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/695/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">海鮮</h3>
                  <a href="#" className="product-title">
                    <h3>清蒸蛤蜊</h3>
                  </a>
                  <div className="product-price">
                    <p>$50.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/696/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">海鮮</h3>
                  <a href="#" className="product-title">
                    <h3>蒸鮮蚵</h3>
                  </a>
                  <div className="product-price">
                    <p>$45.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/677/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">海鮮</h3>
                  <a href="#" className="product-title">
                    <h3>鮮魚鍋物</h3>
                  </a>
                  <div className="product-price">
                    <p>$75.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/698/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">海鮮</h3>
                  <a href="#" className="product-title">
                    <h3>龍蝦味噌湯</h3>
                  </a>
                  <div className="product-price">
                    <p>$25.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/699/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">炸物</h3>
                  <a href="#" className="product-title">
                    <h3>天婦羅拼盤</h3>
                  </a>
                  <div className="product-price">
                    <p>$55.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/699/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">炸物</h3>
                  <a href="#" className="product-title">
                    <h3>炸豆腐</h3>
                  </a>
                  <div className="product-price">
                    <p>$55.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-banner">
                <img src="https://picsum.photos/id/699/300/340" alt="" />
                <div className="product-content">
                  <h3 className="product-category">炸物</h3>
                  <a href="#" className="product-title">
                    <h3>炸薯條</h3>
                  </a>
                  <div className="product-price">
                    <p>$55.00</p>
                  </div>
                  <div className="price-btn">
                    <button className="btnMinus">-</button>
                    <label type="number">0</label>
                    <button className="btnAdd">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
