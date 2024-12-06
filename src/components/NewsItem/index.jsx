// src/components/NewsItem/index.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { newsApi } from "@/api/module/news";

const NewsItem = () => {
  const { t } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsApi.getNews();
        setNewsItems(Array.isArray(data) ? data : []);
      } catch (error) {
        setNewsItems([]);
      }
    };

    fetchNews();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 整個新聞區塊的翻轉動畫
  const containerVariants = {
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
    },
    exit: {
      rotateX: 90,
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!newsItems || newsItems.length === 0) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="w-4/5 mx-auto perspective-1000">
      <motion.div
        className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        {newsItems.map((item, index) => (
          <div
            key={item._id || index}
            className="p-4 border-b border-main-color-yellow
                     hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300"
          >
            <div className="text-news-text-gray mb-2">
              {new Date(item.date).toLocaleDateString()}
            </div>
            <div className="text-main-color-yellow font-bold mb-2">
              {t(`news.newsTitle.newsItem${index + 1}`)}
            </div>
            <div className="text-main-text-white">
              {t(`news.content.newsItem${index + 1}`)}
            </div>
          </div>
        ))}

        {isMobile && newsItems.length > 3 && (
          <div className="p-4 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-main-color-yellow hover:text-white
                       transition-colors duration-300 flex items-center mx-auto"
            >
              {isExpanded ? t("news.showLess") : t("news.showMore")}
              <svg
                className={`w-4 h-4 ml-2 transform transition-transform duration-300
                          ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsItem;
