import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NewsItem from "@/components/NewsItem"; // 確認路徑是否正確
import "@/components/Menu3D/index.css";
import Menu3D from "@/components/Menu3D";
import { useTranslation } from "react-i18next";
import { newsApi } from "@/api/module/news";
import GoTop from "@/components/GoTop";
import i18n from "@/i18n/index";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const imageAnimation = {
    initial: { opacity: 0, x: -50, scale: 0.8 },
    whileInView: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.08,
        ease: "easeOut",
      },
    },
  };

  const newsContainerVariants = {
    offscreen: {
      rotateX: -90,
      y: 50,
      opacity: 0,
      transformPerspective: 1000,
      transformOrigin: "top"
    },
    onscreen: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <>
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
              {t("home.slogan")
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line.split("").map((char, charIndex) => (
                      <motion.span key={charIndex} variants={letterAnimation}>
                        {char}
                      </motion.span>
                    ))}
                    {index !== t("home.slogan").split("\n").length - 1 && (
                      <br />
                    )}
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
              {t("home.backToJia")}
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

      <div className="w-[90%] md:w-[85%] lg:w-4/5 mx-auto mt-[250px] lg:mt-[350px]">
        <Menu3D />
      </div>

      <motion.div
        className="p-40 md:my-[150px] lg:my-[200px] perspective-1000"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={newsContainerVariants}
      >
        <NewsItem />
      </motion.div>

      <div
        className="relative mx-auto mb-[150px] min-h-[50vh] w-full font-georgia font-semibold 
                    text-2xl md:text-3xl lg:text-4xl flex justify-center items-center"
      >
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: "url('/src/assets/images/home/Izakaya-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.5,
          }}
        />

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
          {t("home.welcomeButton")}
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center p-6 lg:p-[50px] gap-8 lg:gap-0">
        <div
          className="w-full lg:w-[550px] leading-[2.5] lg:leading-[3] text-main-color-yellow 
                        tracking-[3px] lg:tracking-[5px] font-georgia 
                        text-xl md:text-2xl mx-4 lg:mx-[75px] my-4 lg:my-[50px] text-center"
        >
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {t("home.contact.address")}
          </motion.p>
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {t("home.contact.phone")}
          </motion.p>
          <motion.p
            className="border-b border-dotted border-main-color-yellow py-2 lg:py-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {t("home.contact.email")}
          </motion.p>
        </div>

        <motion.div
          className="w-full lg:w-[550px] h-[300px] lg:h-[400px] relative 
                     border-2 border-main-color-yellow rounded-lg overflow-hidden
                     transition-all duration-300 hover:scale-105
                     shadow-[0_0_10px_rgba(255,170,13,0.3)]
                     hover:shadow-[0_0_20px_rgba(255,170,13,0.5)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4675767779164!2d121.55729661500897!3d25.058195983958813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab9f9e8d9f67%3A0x7f8f2a2e4b7b0b0a!2z5rCR55Sf5p2x6Lev5LqU5q61MTYz6Jmf!5e0!3m2!1szh-TW!2stw!4v1620000000000!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-all duration-500"
          ></iframe>
        </motion.div>

        <GoTop />
      </div>
    </>
  );
};

export default Home;
