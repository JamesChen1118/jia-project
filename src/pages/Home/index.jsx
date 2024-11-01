import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import NewsItem from "@/components/NewsItem";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* About 餐廳簡介區域 */}
      <div className="text-center h-[500px] my-[150px]">
        <div className="flex flex-row-reverse justify-center items-center">
          <p className="w-[350px] leading-relaxed text-main-color-yellow text-2xl font-georgia ml-[150px] space-y-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum atque quae
            <br />
            officiis recusandae reprehenderit dolore laudantium libero dolorem.
            <br />
            <span
              onClick={() => navigate("/About")}
              className="text-main-color-orange cursor-pointer hover:underline"
            >
              more
            </span>
          </p>
          <img
            src="/src/assets/images/home/Izakaya-1.png"
            alt=""
            className="w-[400px] h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Menu 菜單展示區域 */}
      <div className="w-4/5 mx-auto mt-[350px]">
        <Menu />
      </div>

      {/* News 最新消息區域 */}
      <div className="my-[200px]">
        <NewsItem />
      </div>

      {/* Reservation 訂位區域 */}
      <div className="relative mx-auto mb-[150px] min-h-[30vh] w-full font-georgia font-semibold text-4xl flex justify-center items-center bg-40">
        <button
          onClick={() => navigate("/Booking")}
          className="absolute z-10 py-2.5 px-5 bg-main-color-yellow rounded-xl
                   font-medium text-black transition-all duration-700
                   hover:text-white hover:font-black hover:tracking-wider
                   hover:py-3.5 hover:px-6"
        >
          歡迎回J I A
        </button>
        <img
          src="/src/assets/images/home/Izakaya-2.jpg"
          alt=""
          className="opacity-20 max-h-60vh w-full object-cover"
        />
      </div>

      {/* Location 餐廳資訊區域 */}
      <div className="flex justify-evenly items-center p-[50px]">
        <div
          className="w-[500px] leading-[3] text-main-color-yellow tracking-[5px] 
                      font-georgia text-2xl mx-[75px] my-[50px] text-center"
        >
          <p className="border-b border-dotted border-main-color-yellow">
            地址: 台北市松山區民生東路五段163-1號
          </p>
          <p className="border-b border-dotted border-main-color-yellow">
            電話: (02)2388-8888
          </p>
          <p className="border-b border-dotted border-main-color-yellow">
            Email: contact@jiaizakaya.com
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28914.047024814867!2d121.52479947431641!3d25.059315120000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1726976862072!5m2!1szh-TW!2stw"
          className="w-[700px] h-[450px] outline-none shadow-[3px_3px_15px_#000000] 
                     transition-all duration-500 ease-in-out
                     hover:shadow-[2px_2px_15px_#e69539]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
