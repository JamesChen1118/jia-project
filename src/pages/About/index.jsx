import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  const fadeIn = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

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
          <p className="text-main-text-white text-2xl leading-loose tracking-letterSpacing-5">
            當夜幕降臨城市的燈光漸亮，
            <br />
            JIA靜靜地在台北的一隅等待著您。
            <br />
            穿過喧鬧的街頭，您將感受到溫暖的歸屬感。
            <br />
            我們不僅提供美食，
            <br />
            更重視每道料理背後的心意與故事。
            <br />
            主廚精選當季食材，
            <br />
            以細膩手法創造充滿日式風情的美味，
            <br />
            帶來精緻與溫馨交織的用餐體驗。
          </p>
        </motion.div>
        <motion.img
          src="https://images.pexels.com/photos/5766238/pexels-photo-5766238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="溫馨的居酒屋內部"
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
          alt="傳統居酒屋外觀"
          className="w-[500px] h-[500px] object-cover rounded-lg shadow-custom mr-[150px]"
          variants={slideLeft}
        />
        <motion.div
          className="w-[600px] text-center flex flex-col items-center"
          variants={slideRight}
        >
          <p className="text-main-text-white text-2xl leading-loose tracking-letterSpacing-5 mb-12">
            無論是小酌放鬆，或與親友共享，
            <br />
            JIA都是您的理想選擇。
            <br />
            在這裡，您會感受到如家般的溫暖與舒適，
            <br />
            讓疲憊的心靈獲得片刻放鬆。
            <br />
            如果您渴望片刻寧靜，
            <br />
            歡迎回到JIA，坐下，慢慢品味，
            <br />
            這裡，是您的小小歸屬。
          </p>{" "}
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
            歡迎回JIA
          </motion.button>
        </motion.div>{" "}
      </motion.div>
    </div>
  );
};

export default About;
