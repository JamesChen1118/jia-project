import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsApi } from "@/api/news";
import i18n from "@/i18n";

const NewsItem = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsApi.getNews();
        if (Array.isArray(data)) {
          const translatedNews = data.map((item, index) => ({
            ...item,
            title: i18n.t(`news.newsTitle.newsItem${index + 1}`),
            content: i18n.t(`news.content.newsItem${index + 1}`),
          }));
          setNewsItems(translatedNews);
        } else {
          console.error("News data is not an array:", data);
          setNewsItems([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsItems([]);
      }
    };

    fetchNews();

    const handleLanguageChange = () => {
      fetchNews();
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  if (newsItems.length === 0) {
    return <div className="w-4/5 mx-auto text-center">載入中...</div>;
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden p-5">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-12 gap-4 p-5 border-b border-main-color-yellow
                       hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-span-3 text-news-text-gray">{item.date}</div>
            <div className="col-span-3 text-main-color-yellow font-bold">
              {item.title}
            </div>
            <div className="col-span-6 text-main-text-white">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
