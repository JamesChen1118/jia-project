import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { newsApi } from "@/api/module/news.js";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NewsItem = () => {
  const [newsItems, setNewsItems] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsApi.getNews();
        console.log("Fetched news data:", data);
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsItems([]);
      }
    };

    fetchNews();
  }, []);

  if (newsItems.length === 0) {
    return <div className="w-4/5 mx-auto text-center">載入中...</div>;
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="hidden lg:block">
        <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
          {newsItems.map((item) => (
            <motion.div
              key={item._id}
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
                {item.title}
              </div>
              <div className="col-span-6 text-main-text-white">
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="block lg:hidden">
        <h2 className="text-2xl text-main-color-yellow text-center mb-6 font-bold">
          {t("news.title")}
        </h2>
        <div className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden">
          <div className="p-4 space-y-4">
            {newsItems.map((item) => (
              <motion.div
                key={item._id}
                className="border-b border-main-color-yellow/30 pb-4 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-main-color-yellow font-bold mb-2">
                  {item.title}
                </div>
                <div className="text-news-text-gray text-sm mb-1">
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <div className="text-main-text-white text-sm">
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
