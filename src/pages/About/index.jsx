import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const slideInLeft = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const slideInRight = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <ScrollToContent />
      <div className="mt-[150px] mb-[200px] px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-40 gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 px-4"
            variants={slideInLeft}
          >
            <p
              className="w-10/12 text-main-text-white text-lg md:text-xl lg:text-2xl leading-loose tracking-wider
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

          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 px-4"
            variants={slideInLeft}
          >
            <img
              src="https://images.pexels.com/photos/5766238/pexels-photo-5766238.jpeg"
              alt={t("about.title")}
              className="w-full max-w-[500px] h-[500px] object-cover rounded-lg shadow-custom mx-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <motion.div className="w-full lg:w-1/2 px-4" variants={slideInRight}>
            <img
              src="https://images.pexels.com/photos/1710001/pexels-photo-1710001.jpeg"
              alt={t("about.title")}
              className="w-full max-w-[500px] h-[500px] object-cover rounded-lg shadow-custom mx-auto"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left px-4 flex flex-col items-center"
            variants={slideInRight}
          >
            <p
              className="w-4/5 text-main-text-white text-lg md:text-xl lg:text-2xl leading-loose tracking-wider mb-12
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
