import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import "./index.css";
import NewsItem from "@/components/NewsItem";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* About 餐廳簡介區域 */}
      <div className="about">
        <div className="about-text">
          <p className="w-[350px] leading-relaxed text-[#ffaa0d] text-2xl font-serif ml-[150px] space-y-6">
            Lorem ipsum dolor sit amet consectetur,ipisicing elit. Neque harum
            atque quae
            <br />
            officiis recusandae reprehenderit dolore laudantium libero dolorem.
            <br />
            <span
              onClick={() => navigate("/About")}
              className="text-[#ed6934] no-underline cursor-pointer"
            >
              more
            </span>
          </p>
          <img
            src="/src/assets/images/home/Izakaya-1.png"
            alt=""
            className="w-[400px] h-[500px]"
          />
        </div>
      </div>

      {/* Menu 菜單展示區域 */}
      <div className="menuList">
        <Menu />
      </div>

      {/* News 最新消息區域 */}
      <NewsItem />

      {/* Reservation 訂位區域 */}
      <div className="index-booking">
        <button
          onClick={() => navigate("/Booking")}
          className="absolute z-10 text-center py-2.5 px-5 bg-[#ffaa0d] rounded-xl font-medium text-black transition-all duration-700 hover:text-white hover:font-black hover:tracking-wider hover:py-3.5 hover:px-6"
        >
          歡迎回J I A
        </button>
        <img
          src="/src/assets/images/home/Izakaya-2.jpg"
          alt=""
          className="opacity-20 max-h-[60vh] w-full object-cover"
        />
      </div>

      {/* Location 餐廳資訊區域 */}
      <div className="map">
        <div className="map-text">
          <p>地址: 台北市松山區民生東路五段163-1號</p>
          <p>電話: (02)2388-8888</p>
          <p>Email: contact@jiaizakaya.com</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28914.047024814867!2d121.52479947431641!3d25.059315120000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1726976862072!5m2!1szh-TW!2stw"
          className="w-[700px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
