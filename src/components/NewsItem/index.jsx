import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsApi } from "@/api/news";
import { useTranslation } from "react-i18next";

const NewsItem = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNews = async () => {
      const data = await newsApi.getNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            className="grid grid-cols-12 gap-4 p-4 border-b border-main-color-yellow
                       hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-span-3 text-news-text-gray">{item.date}</div>
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
  );
};

export default NewsItem;
