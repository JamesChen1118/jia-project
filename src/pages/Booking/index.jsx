import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";

const Booking = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div
        className="w-[70%] mx-auto flex flex-col lg:flex-row justify-evenly items-center text-center 
                    mt-[80px] mb-[150px]
                    px-5 sm:px-[50px] lg:px-[100px] xl:px-[200px]
                    text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[58px]
                    font-verdana font-bold tracking-[5px]
                    gap-10 lg:gap-20"
      >
        <button
          onClick={() => navigate("/Order")}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]
                     flex items-center justify-center
                     border-3 border-[#bbaf48] rounded-full
                     bg-gradient-to-br from-[#e7dc74] via-[#a1973e] to-[#ccc375]
                     text-[#31312f] hover:text-[aliceblue]
                     shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)]
                     hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-5px_-5px_15px_rgba(255,255,255,0.2)]
                     transition-all duration-800 ease-in-out
                     hover:scale-110"
        >
          {t("booking.takeout")}
        </button>

        <button
          onClick={() => navigate("/Reservation")}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]
                     flex items-center justify-center
                     border-3 border-[#bbaf48] rounded-full
                     bg-gradient-to-br from-[#e7dc74] via-[#a1973e] to-[#ccc375]
                     text-[#31312f] hover:text-[aliceblue]
                     shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)]
                     hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-5px_-5px_15px_rgba(255,255,255,0.2)]
                     transition-all duration-800 ease-in-out
                     hover:scale-110"
        >
          {t("booking.dineIn")}
        </button>
      </div>
    </>
  );
};

export default Booking;
