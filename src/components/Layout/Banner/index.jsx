import { useTranslation } from "react-i18next";
import { useUserStore } from "@/store/lang.js";
import defaultImage from "@/assets/images/home/banner-1.png";

const Banner = ({ backgroundImage = defaultImage }) => {
  const { language } = useUserStore();
  const { t } = useTranslation();
  return (
    <div className="relative mt-16 mb-[40px] md:mb-[50px] lg:mb-[60px]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
                      w-full px-4 bg-black/20 py-8"
      >
        <h3
          className="relative text-main-color-yellow font-georgia 
                       text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                       font-bold italic text-center tracking-letterSpacing-40"
        >
          JIA
        </h3>
        <p
          className="text-main-color-orange 
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                      italic text-center mt-4 sm:mt-8 md:mt-12 lg:mt-20 
                      tracking-letterSpacing-5"
        >
          {language === "zh_TW"
            ? "現代 創作 居酒屋"
            : t("Modern Creative Izakaya")}
        </p>
      </div>
      <img
        src={backgroundImage}
        alt=""
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] 
                    opacity-40 object-cover 
                    mt-0"
      />
    </div>
  );
};

export default Banner;
