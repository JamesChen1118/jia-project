import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsApi } from "@/api/news";

const NewsItem = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await newsApi.getNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div className="w-3/5 mx-auto">
      <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
        {news.map((item) => (
          <motion.div
            key={item.id}
            className="grid grid-cols-12 gap-4 p-6 border-b border-main-color-yellow
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
