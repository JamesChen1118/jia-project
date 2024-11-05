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
      <div className="mt-[120px] mb-[150px] px-4 md:px-8 lg:px-12">
        {/* 第一區塊 */}
        <motion.div
          className="flex flex-col items-center mb-16 md:mb-24"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/5766238/pexels-photo-5766238.jpeg"
            alt={t("about.title")}
            className="w-full max-w-[500px] h-[300px] md:h-[400px] object-cover rounded-lg shadow-custom mb-8"
            variants={fadeIn}
          />
          <motion.div
            className="w-full max-w-[600px] text-center"
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
        </motion.div>

        {/* 第二區塊 */}
        <motion.div
          className="flex flex-col items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/1710001/pexels-photo-1710001.jpeg"
            alt={t("about.title")}
            className="w-full max-w-[500px] h-[300px] md:h-[400px] object-cover rounded-lg shadow-custom mb-8"
            variants={fadeIn}
          />
          <motion.div
            className="w-full max-w-[600px] text-center"
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
              className="px-6 py-2.5 text-lg md:text-xl text-main-color-yellow border-2 border-main-color-yellow 
                       rounded-lg transition-all duration-300 hover:bg-main-color-yellow hover:text-white 
                       hover:shadow-custom-hover"
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
