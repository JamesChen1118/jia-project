import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ScrollToContent />
      <div className="w-[70%] mx-auto mt-[120px] mb-[150px] flex flex-col lg:flex-row justify-center shadow-lg rounded-[20px] overflow-hidden">
        {/* 左側表單區域 */}
        <div className="w-full lg:w-[60%] flex flex-col bg-transparent border border-white/20 shadow-lg rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none text-center items-center p-8">
          <h1 className="text-2xl md:text-3xl text-main-color-yellow font-bold tracking-[15px] mb-8 pb-2 border-b-[7px] border-double border-[rgb(255,120,0)] shadow-text">
            {t("contact.title")}
          </h1>

          <input
            className="w-full md:w-[80%] mb-5 p-4 text-lg bg-transparent border border-main-color-yellow rounded-[15px_0_15px_0] text-center text-main-color-yellow tracking-[5px] outline-none"
            placeholder={t("contact.name")}
          />
          <input
            className="w-full md:w-[80%] mb-5 p-4 text-lg bg-transparent border border-main-color-yellow rounded-[15px_0_15px_0] text-center text-main-color-yellow tracking-[5px] outline-none"
            placeholder={t("contact.phone")}
          />
          <input
            className="w-full md:w-[80%] mb-5 p-4 text-lg bg-transparent border border-main-color-yellow rounded-[15px_0_15px_0] text-center text-main-color-yellow tracking-[5px] outline-none"
            placeholder={t("contact.email")}
            required
          />
          <input
            className="w-full md:w-[80%] mb-5 p-4 text-lg bg-transparent border border-main-color-yellow rounded-[15px_0_15px_0] text-center text-main-color-yellow tracking-[5px] outline-none"
            placeholder={t("contact.subject")}
          />
          <textarea
            className="w-full md:w-[80%] mb-5 p-4 text-lg bg-transparent border border-main-color-yellow rounded-[15px_0_15px_0] text-center text-main-color-yellow tracking-[5px] outline-none resize-vertical"
            rows="5"
            placeholder={t("contact.content")}
            required
          ></textarea>

          <button
            onClick={() => navigate("/Booking")}
            className="px-5 py-2.5 mt-8 text-xl font-bold bg-main-color-yellow text-black rounded-xl border border-main-color-yellow transition-all duration-300 hover:bg-[rgb(255,120,0)] hover:text-[#f0e68c] active:scale-90 shadow-md"
          >
            {t("contact.submit")}
          </button>
        </div>

        {/* 右側資訊區域 */}
        <div className="w-full lg:w-[40%] flex flex-col bg-[#292828] border border-white/20 rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none p-8">
          <div className="flex flex-col gap-6 mb-12">
            <p className="text-main-color-yellow text-xl md:text-2xl font-bold font-georgia text-center shadow-text">
              {t("contact.address")}
            </p>
            <p className="text-main-color-yellow text-xl md:text-2xl font-bold font-georgia text-center shadow-text">
              {t("contact.phone_number")}
            </p>
            <p className="text-main-color-yellow text-xl md:text-2xl font-bold font-georgia text-center shadow-text">
              {t("contact.email_address")}
            </p>
          </div>

          <div className="mt-auto">
            <iframe
              className="w-full h-[350px] rounded-[20px] shadow-lg transition-all duration-500 hover:shadow-[2px_2px_15px_#e69539]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.023512407435!2d121.5629083!3d25.0593151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1729574886171!5m2!1szh-TW!2stw"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
