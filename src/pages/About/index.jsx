import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fadeIn = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <ScrollToContent />
      <div className="mt-[80px] mb-[100px] px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        {/* 第一區塊 - 文字在左，圖片在右 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* 左側文字 */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 px-4"
            variants={fadeIn}
          >
            <p
              className="text-main-text-white text-lg md:text-xl lg:text-2xl leading-loose tracking-wider
                         [text-shadow:2px_2px_4px_rgba(0,0,0,0.7),1px_1px_8px_rgba(255,170,13,0.8)]"
            >
              {t("about.description1")}
              <br />
              {t("about.description2")}
              <br />
              {t("about.description3")}
              <br />
              {t("about.description4")}
              <br />
              {t("about.description5")}
            </p>
          </motion.div>

          {/* 右側圖片 */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 px-4"
            variants={fadeIn}
          >
            <img
              src="https://images.pexels.com/photos/5766238/pexels-photo-5766238.jpeg"
              alt={t("about.title")}
              className="w-full max-w-[500px] h-[350px] object-cover rounded-lg shadow-custom mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* 第二區塊 - 圖片在左，文字在右 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* 左側圖片 */}
          <motion.div className="w-full lg:w-1/2 px-4" variants={fadeIn}>
            <img
              src="https://images.pexels.com/photos/1710001/pexels-photo-1710001.jpeg"
              alt={t("about.title")}
              className="w-full max-w-[500px] h-[350px] object-cover rounded-lg shadow-custom mx-auto"
            />
          </motion.div>

          {/* 右側文字和按鈕 */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left px-4"
            variants={fadeIn}
          >
            <p
              className="text-main-text-white text-lg md:text-xl lg:text-2xl leading-loose tracking-wider mb-8
                         [text-shadow:2px_2px_4px_rgba(0,0,0,0.7),1px_1px_8px_rgba(255,170,13,0.8)]"
            >
              {t("about.description6")}
              <br />
              {t("about.description7")}
              <br />
              {t("about.description8")}
              <br />
              {t("about.description9")}
            </p>
            <motion.button
              onClick={() => navigate("/Booking")}
              className="px-8 py-3 text-xl text-main-color-yellow border-2 border-main-color-yellow 
                       rounded-lg transition-all duration-300 hover:bg-main-color-yellow hover:text-white 
                       hover:shadow-custom-hover mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("about.welcomeButton")}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
