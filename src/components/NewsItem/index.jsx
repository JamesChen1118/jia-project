// src/components/NewsItem/index.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { newsApi } from "@/api/module/news";

const NewsItem = () => {
  const { t } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsApi.getNews();
        console.log("Fetched news data:", data);
        setNewsItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  if (!newsItems || newsItems.length === 0) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="w-4/5 mx-auto">
      {/* 桌面版 */}
      <div className="hidden lg:block">
        <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
          {newsItems.map((item, index) => (
            <motion.div
              key={item._id || index}
              className="grid grid-cols-12 gap-4 p-4 border-b border-main-color-yellow
                       hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="col-span-3 text-news-text-gray">
                {new Date(item.date).toLocaleDateString()}
              </div>
              <div className="col-span-3 text-main-color-yellow font-bold">
                {t(`news.newsTitle.newsItem${index + 1}`)}
              </div>
              <div className="col-span-6 text-main-text-white">
                {t(`news.content.newsItem${index + 1}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 手機版 */}
      <div className="block lg:hidden">
        <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
          {newsItems
            .slice(0, isExpanded ? newsItems.length : 3)
            .map((item, index) => (
              <motion.div
                key={item._id || index}
                className="p-4 border-b border-main-color-yellow
                       hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            ))}

          {newsItems.length > 3 && (
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
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
