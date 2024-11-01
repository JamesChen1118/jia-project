import { useTranslation } from "react-i18next";
import { useUserStore } from "@/store/lang.js";

const Banner = () => {
  const { language } = useUserStore();
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="absolute top-[350px] left-1/2 -translate-x-1/2 z-10">
        <h3 className="relative text-main-color-yellow font-georgia text-8xl font-bold italic text-center tracking-[40px]">
          JIA
        </h3>
        <p className="text-main-color-orange text-4xl italic text-center mt-20 tracking-[5px] space-x-[28px]">
          {language === "zh_TW" ? "現代 " : t("Modern ")}
          {language === "zh_TW" ? "創作 " : t("Creative ")}
          {language === "zh_TW" ? "居酒屋" : t("Izakaya")}
        </p>
      </div>
      <img
        src="/src/assets/images/home/banner-1.png"
        alt=""
        className="w-full h-[80vh] opacity-40 object-cover"
      />
    </div>
  );
};

export default Banner;
