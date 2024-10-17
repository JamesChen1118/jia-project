import { Link } from "react-router-dom";
import "./index.css";

const menuItemImg = [
  "https://picsum.photos/id/684/120/700",
  "https://picsum.photos/id/685/120/700",
  "https://picsum.photos/id/686/120/700",
  "https://picsum.photos/id/687/120/700",
  "https://picsum.photos/id/688/120/700",
  "https://picsum.photos/id/689/120/700",
  "https://picsum.photos/id/690/120/700",
  "https://picsum.photos/id/691/120/700",
  "https://picsum.photos/id/692/120/700",
  "https://picsum.photos/id/693/120/700",
  "https://picsum.photos/id/694/120/700",
  "https://picsum.photos/id/695/120/700",
];

const Home = () => {
  return (
    <>
      {/* <!-- ---------About 餐廳簡介區域 --------- --> */}
      <div className="about">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur,ipisicing elit. Neque harum
            atque quae <br />
            <br />
            officiis recusandae reprehenderit dolore laudantium libero dolorem.
            <br />
            <a href="#">more</a>
          </p>
          <img src="/src/assets/images/home/Izakaya-1.png" alt="" />
        </div>
      </div>

      {/* <!-- --------- Menu 菜單展示區域 --------- --> */}
      <div className="menuList">
        <ul className="menuRow">
          {menuItemImg.map((item) => (
            <li key={item} className="menuItem">
              <img className="menu-img" src={item} alt="菜單圖片" />
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- ---------  News 最新消息區域 --------- --> */}
      <div className="newsArea">
        <div className="newsItem">
          <div className="item">
            <div className="Txt">
              <div className="top">
                <div className="dateBox">
                  <div className="date">Nov.15.2024</div>
                </div>

                <h3 className="title">11月活動限定，生啤買一送一 ~!!!</h3>
              </div>

              <div className="bottom">
                <div className="textEditor">
                  <div className="textBox">
                    <div className="text">
                      <div dir="auto">
                        <a href="#">訂位連結</a>
                        <a href="#">活動資訊</a>
                      </div>
                    </div>
                  </div>

                  <div className="Img">
                    <img title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------- Reservation 訂位區域 --------- --> */}
      <div className="index-booking">
        <a href="#">歡迎回J I A</a>
        <img src="/src/assets/images/home/Izakaya-2.jpg" alt="" />
      </div>

      {/* <!-- --------- Location 餐廳資訊區域 --------- --> */}
      <div className="map">
        <div className="map-text">
          <p>地址: 台北市松山區民生東路五段163-1號</p>
          <p>電話: (02)2388-8888</p>
          <p>Email: contact@jiaizakaya.com</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28914.047024814867!2d121.52479947431641!3d25.059315120000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1726976862072!5m2!1szh-TW!2stw"
          width="1100"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
