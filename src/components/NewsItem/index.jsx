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
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsItems([]);
      }
    };

    fetchNews();
  }, []);

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
        <h2 className="text-2xl text-main-color-yellow text-center mb-6 font-bold">
          {t("news.title")}
        </h2>
        <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
          <div className="p-4 space-y-4">
            {/* 顯示前5則新聞 */}
            {newsItems.slice(0, 5).map((item, index) => (
              <motion.div
                key={item._id || index}
                className="border-b border-main-color-yellow/30 pb-4 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-main-color-yellow font-bold mb-2">
                  {t(`news.newsTitle.newsItem${index + 1}`)}
                </div>
                <div className="text-news-text-gray text-sm mb-1">
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <div className="text-main-text-white text-sm">
                  {t(`news.content.newsItem${index + 1}`)}
                </div>
              </motion.div>
            ))}

            {/* 展開後顯示的新聞 */}
            <div
              className={`${
                isExpanded ? "block" : "hidden"
              } transition-all duration-300`}
            >
              {newsItems.slice(5).map((item, index) => (
                <motion.div
                  key={item._id || index + 5}
                  className="border-b border-main-color-yellow/30 pb-4 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-main-color-yellow font-bold mb-2">
                    {t(`news.newsTitle.newsItem${index + 6}`)}
                  </div>
                  <div className="text-news-text-gray text-sm mb-1">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="text-main-text-white text-sm">
                    {t(`news.content.newsItem${index + 6}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 查看更多按鈕 */}
          {newsItems.length > 5 && !isExpanded && (
            <div className="p-4 text-center">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-6 py-2 bg-main-color-yellow text-black rounded-lg
                         hover:bg-main-color-yellow/80 transition-all duration-300
                         flex items-center gap-2 mx-auto"
              >
                {t("news.viewMore")}
                <svg
                  className="w-4 h-4 transform transition-transform duration-300"
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
