import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsApi } from "@/api/module/news.js";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NewsItem = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await newsApi.getNews();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4"
    >
      {news.map((item, index) => (
        <motion.div
          key={item.title + index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 p-4 rounded-lg"
        >
          <h3 className="text-xl font-bold text-main-color-yellow mb-2">
            {item.title}
          </h3>
          <p className="text-main-text-white">{item.content}</p>
          <span className="text-sm text-gray-400">
            {new Date(item.date).toLocaleDateString()}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NewsItem;
