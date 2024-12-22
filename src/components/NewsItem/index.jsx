import { useState, useEffect } from "react";
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    offscreen: {
      rotateX: -180,
      y: 50,
      opacity: 0,
      transformPerspective: 1000,
      transformOrigin: "top",
    },
    onscreen: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      rotateX: 180,
      y: -50,
      opacity: 0,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <div
      className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] 
                    mx-auto py-10 md:py-16 lg:py-20"
    >
      <motion.div
        className="bg-transparent-dark rounded-lg shadow-custom overflow-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        {newsItems
          .slice(0, isMobile && !isExpanded ? 3 : 10)
          .map((item, index) => (
            <div
              key={item._id || index}
              className="px-4 py-4 sm:px-6 lg:px-8
                       border-b border-main-color-yellow
                       hover:bg-[rgba(230,149,57,0.1)] transition-all duration-300
                       flex flex-col lg:flex-row items-start lg:items-center
                       gap-2 lg:gap-6"
            >
              <div
                className="text-news-text-gray
                          whitespace-nowrap
                          w-[120px]
                          text-sm lg:text-base"
              >
                {new Date(item.date).toLocaleDateString()}
              </div>
              <div
                className="text-main-color-yellow font-bold
                          whitespace-nowrap
                          w-[180px]
                          text-base lg:text-lg
                          mb-2 lg:mb-0"
              >
                {t(`news.newsTitle.newsItem${index + 1}`)}
              </div>
              <div
                className="text-main-text-white
                          w-full lg:flex-1
                          text-sm lg:text-base
                          break-words"
              >
                {t(`news.content.newsItem${index + 1}`)}
              </div>
            </div>
          ))}

        {isMobile && newsItems.length > 3 && newsItems.length <= 10 && (
          <div className="p-4 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-main-color-yellow hover:text-white
                       transition-colors duration-300 flex items-center mx-auto"
            >
              {t(isExpanded ? "news.showLess" : "news.showMore")}
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
