import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";
import { useAuthStore } from "@/store/auth";
import Swal from "sweetalert2";

// 創建一個通用的 Swal 配置
const commonSwalConfig = {
  background: "#333",
  color: "#E69539",
  confirmButtonColor: "#E69539",
  cancelButtonColor: "#666",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
  customClass: {
    title: "text-main-color-yellow text-xl",
    htmlContainer: "text-main-color-yellow",
    popup: "custom-popup-class",
    confirmButton: "custom-confirm-button",
    cancelButton: "custom-cancel-button",
  },
};

const Booking = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLoggedIn } = useAuthStore();

  const handleTakeoutClick = () => {
    if (!isLoggedIn) {
      Swal.fire({
        ...commonSwalConfig,
        title: t("login.required") || "請先登入",
        text: t("login.reservation_hint") || "需要登入才能進行點餐",
        icon: "info",
        confirmButtonText: t("login.submit") || "前往登入",
        showCancelButton: true,
        cancelButtonText: t("common.cancel") || "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("intendedRoute", "/order");
          navigate("/login");
        }
      });
    } else {
      navigate("/order");
    }
  };

  const handleDineInClick = () => {
    if (!isLoggedIn) {
      Swal.fire({
        ...commonSwalConfig,
        title: t("login.required"),
        text: t("login.reservation_hint"),
        icon: "info",
        confirmButtonText: t("login.submit"),
        showCancelButton: true,
        cancelButtonText: t("common.cancel"),
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("intendedRoute", "/reservation");
          navigate("/login");
        }
      });
    } else {
      navigate("/reservation");
    }
  };

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="min-h-screen">
        <div
          className="w-[70%] mx-auto 
                      flex flex-col lg:flex-row justify-evenly items-center text-center 
                      pt-0 mb-[150px] gap-10 lg:gap-20
                      px-5 sm:px-[50px] lg:px-[100px] xl:px-[200px]"
        >
          <button
            onClick={handleTakeoutClick}
            className="group relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] 
                     lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]
                     overflow-hidden rounded-full
                     transition-all duration-500 ease-out
                     shadow-[0_0_20px_rgba(0,0,0,0.3)]
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                     active:scale-95"
          >
            <div
              className="absolute inset-0 bg-cover bg-center
                       transition-all duration-700 ease-out
                       group-hover:scale-110 group-hover:blur-[0px]
                       blur-[3px] brightness-[0.8]
                       group-hover:brightness-[1.1]"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              }}
            />

            <div
              className="absolute inset-0 rounded-full
                          border-2 border-white/20
                          bg-black/30 backdrop-blur-[2px]
                          group-hover:border-white/40
                          group-hover:bg-black/20
                          group-hover:backdrop-blur-[1px]
                          transition-all duration-500
                          group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
            />

            <span
              className="relative z-10
                         text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[58px]
                         font-verdana font-bold tracking-[5px]
                         text-main-color-yellow drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
                         transition-all duration-500"
            >
              {t("booking.takeout")}
            </span>
          </button>

          <button
            onClick={handleDineInClick}
            className="group relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] 
                     lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]
                     overflow-hidden rounded-full
                     transition-all duration-500 ease-out
                     shadow-[0_0_20px_rgba(0,0,0,0.3)]
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                     active:scale-95"
          >
            <div
              className="absolute inset-0 bg-cover bg-center
                       transition-all duration-700 ease-out
                       group-hover:scale-110 group-hover:blur-[0px]
                       blur-[3px] brightness-[0.8]
                       group-hover:brightness-[1.1]"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              }}
            />

            <div
              className="absolute inset-0 rounded-full
                          border-2 border-white/20
                          bg-black/30 backdrop-blur-[2px]
                          group-hover:border-white/40
                          group-hover:bg-black/20
                          group-hover:backdrop-blur-[1px]
                          transition-all duration-500
                          group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
            />

            <span
              className="relative z-10
                         text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[58px]
                         font-verdana font-bold tracking-[5px]
                         text-main-color-yellow drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
                         transition-all duration-500"
            >
              {t("booking.dineIn")}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
