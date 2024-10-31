import "./index.css";
import { useTranslation } from "react-i18next";
import { useUserStore } from "@/store/lang.js";

const Banner = () => {
  const { language } = useUserStore();
  const { t } = useTranslation();
  return (
    <div className="banner">
      <div className="banner-title">
        <h3>JIA</h3>
        <p>
          {language === "zh_TW" ? "現代 " : t("Modern ")}
          {language === "zh_TW" ? "創作 " : t("Creative ")}
          {language === "zh_TW" ? "居酒屋" : t("Izakaya")}
        </p>
      </div>
      <img src="/src/assets/images/home/banner-1.png" alt="" />
    </div>
  );
};

export default Banner;
