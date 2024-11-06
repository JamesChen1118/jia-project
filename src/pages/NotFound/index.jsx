import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollToContent from "@/components/ScrollToContent";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ScrollToContent />
      <div className="flex justify-center items-center min-h-screen bg-[rgba(26,26,26,0.7)] px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-[90%] max-w-[600px] text-center p-4 sm:p-6 md:p-8"
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
                       font-bold text-main-color-yellow 
                       mb-4 sm:mb-6 md:mb-8 font-georgia tracking-wider"
          >
            404
          </h1>
          <h2
            className="text-xl sm:text-2xl md:text-3xl 
                       text-main-color-orange 
                       mb-4 sm:mb-5 md:mb-6 font-georgia 
                       tracking-[3px] sm:tracking-[4px] md:tracking-[5px]"
          >
            {t("notFound.title") || "頁面不存在"}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl 
                      text-main-text-white 
                      mb-8 sm:mb-10 md:mb-12 
                      tracking-[2px] sm:tracking-[3px] 
                      leading-relaxed px-2 sm:px-4"
          >
            {t("notFound.description") ||
              "很抱歉，您所尋找的頁面似乎不在這裡。"}
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center 
                        gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 
                       text-base sm:text-lg text-main-color-yellow 
                       border-2 border-main-color-yellow rounded-lg
                       transition-all duration-300
                       hover:bg-main-color-yellow hover:text-black
                       active:scale-95"
            >
              {t("notFound.back") || "返回上一頁"}
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 
                       text-base sm:text-lg bg-main-color-yellow 
                       text-black rounded-lg border-2 border-transparent
                       transition-all duration-300
                       hover:bg-[rgb(255,120,0)] hover:text-white
                       active:scale-95"
            >
              {t("notFound.home") || "回到首頁"}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
