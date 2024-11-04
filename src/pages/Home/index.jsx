import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NewsItem from "@/components/NewsItem";
import "@/components/Menu3D/index.css";
import Menu3D from "@/components/Menu3D";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const [openImageId, setOpenImageId] = useState(null);
  const { t } = useTranslation();

  const text =
    "我們靜立於台北喧囂的角落，\n提供充滿溫度的美食\n以及溫馨的服務，\n奔波了一天，辛苦了!\n快回JIA~";

  const textAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const pageVariants = {
    initial: {
      rotateX: 90,
      opacity: 0,
      y: 50,
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      rotateX: -90,
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* About 餐廳簡介區域 */}
      <div className="text-center min-h-[500px] my-[100px] lg:my-[150px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 lg:gap-0">
          <motion.div
            className="w-full lg:w-[580px] leading-loose text-main-color-yellow 
                                text-xl md:text-2xl lg:text-3xl font-georgia 
                                lg:ml-[200px] space-y-6"
          >
            <motion.p
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={letterAnimation}>
                      {char}
                    </motion.span>
                  ))}
                  {index !== text.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.p>

            <motion.button
              onClick={() => navigate("/About")}
              className="inline-block px-8 py-3 text-2xl text-main-color-orange 
                        transition-all duration-300 hidden italic
                        text-shadow-cart hover:text-shadow-cart-hover"
              initial={{ opacity: 0, y: 20, display: "none" }}
              animate={{ opacity: 1, y: 0, display: "inline-block" }}
              transition={{
                duration: 0.5,
                delay: 2.3,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JIA裡看看
            </motion.button>
          </motion.div>

          <motion.img
            src="/src/assets/images/home/Izakaya-1.png"
            alt=""
            className="w-[300px] md:w-[350px] lg:w-[400px] h-auto lg:h-[500px] object-cover"
            initial={{
              opacity: 0,
              x: -180,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.6, 0.01, -0.05, 0.95],
              opacity: { duration: 1.5 },
              x: {
                type: "spring",
                damping: 20,
                stiffness: 50,
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </div>

      {/* Menu 菜單展示區域 */}
      <div className="w-[90%] md:w-[85%] lg:w-4/5 mx-auto mt-[250px] lg:mt-[350px]">
        <Menu3D />
      </div>

      {/* News 最新消息區域 */}
      <motion.div
        className="my-[100px] md:my-[150px] lg:my-[200px] perspective-1000"
        // ... motion 屬性保持不變 ...
      >
        <NewsItem />
      </motion.div>

      {/* Reservation 訂位區域 */}
      <div
        className="relative mx-auto mb-[150px] min-h-[50vh] w-full font-georgia font-semibold 
                      text-2xl md:text-3xl lg:text-4xl flex justify-center items-center"
      >
        {/* 背景圖片容器 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/src/assets/images/home/Izakaya-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.5,
          }}
        ></div>

        {/* 按鈕 */}
        <motion.button
          onClick={() => navigate("/Booking")}
          className="relative z-20 py-2.5 px-5 bg-main-color-yellow rounded-xl
                   font-medium text-black transition-all duration-700
                   hover:text-white hover:font-black hover:tracking-wider
                   hover:py-3.5 hover:px-6
                   text-xl md:text-2xl lg:text-4xl"
          animate={{
            y: [-20, 20],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          歡迎回J I A
        </motion.button>
      </div>

      {/* Location 餐廳資訊區域 */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center p-6 lg:p-[50px] gap-8 lg:gap-0">
        <div
          className="w-full lg:w-[550px] leading-[2.5] lg:leading-[3] text-main-color-yellow 
                        tracking-[3px] lg:tracking-[5px] font-georgia 
                        text-xl md:text-2xl mx-4 lg:mx-[75px] my-4 lg:my-[50px] text-center"
        >
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            地址: 台北市松山區民生東路五段163-1號
          </motion.p>
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            電話: (02)2388-8888
          </motion.p>
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Email: contact@jiaizakaya.com
          </motion.p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28914.047024814867!2d121.52479947431641!3d25.059315120000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1726976862072!5m2!1szh-TW!2stw"
          className="w-full lg:w-[700px] h-[300px] md:h-[400px] lg:h-[450px] 
                     outline-none shadow-[3px_3px_15px_#000000] 
                     transition-all duration-500 ease-in-out
                     hover:shadow-[2px_2px_15px_#e69539]
                     px-4 lg:px-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
