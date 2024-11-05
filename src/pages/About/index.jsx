import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const slideLeft = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const slideRight = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <ScrollToContent />
      <div className="mt-[150px] mb-[300px] relative">
        <motion.div
          className="flex justify-center items-center mb-[100px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="w-[600px] mr-[150px] text-center"
            variants={slideLeft}
          >
            <p
              className="text-main-text-white text-2xl leading-loose tracking-letterSpacing-5
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
          <motion.img
            src="https://images.pexels.com/photos/5766238/pexels-photo-5766238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={t("about.title")}
            className="w-[500px] h-[500px] object-cover rounded-lg shadow-custom"
            variants={slideRight}
          />
        </motion.div>

        <motion.div
          className="flex justify-center items-center mb-[100px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/1710001/pexels-photo-1710001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={t("about.title")}
            className="w-[500px] h-[500px] object-cover rounded-lg shadow-custom mr-[150px]"
            variants={slideLeft}
          />
          <motion.div
            className="w-[600px] text-center flex flex-col items-center"
            variants={slideRight}
          >
            <p
              className="text-main-text-white text-2xl leading-loose tracking-letterSpacing-5 mb-12
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
              className="inline-block px-8 py-3 text-xl text-main-color-yellow border-2 border-main-color-yellow rounded-lg 
              transition-all duration-300 hover:bg-main-color-yellow hover:text-white hover:shadow-custom-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
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
