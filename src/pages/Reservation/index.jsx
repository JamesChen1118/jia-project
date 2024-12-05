import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { reservationApi } from "@/api/module/reservation";
import GoTop from "@/components/GoTop";
import ScrollToContent from "@/components/ScrollToContent";
import table2 from "../../assets/images/reservation/seat-2-1.png";
import table4 from "../../assets/images/reservation/table-4.png";
import { message } from "antd";
import { useAuthStore } from "@/store/auth";
import Swal from "sweetalert2";

const timeOptions = [
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

const tableList = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2"];

const Reservation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedTable, setSelectedTable] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    email: "",
    phone: "",
    people: "",
    tableNo: "",
  });
  const [email, setEmail] = useState("");

  const { isLoggedIn } = useAuthStore();

  const handleTableClick = async (tableNo) => {
    if (!formData.date || !formData.time) {
      Swal.fire({
        title: "提示",
        text: "請先選擇日期和時間",
        icon: "warning",
        confirmButtonText: "確定",
      });
      return;
    }

    try {
      const isAvailable = await reservationApi.checkTableAvailability(
        formData.date,
        formData.time,
        tableNo
      );

      if (!isAvailable) {
        Swal.fire({
          title: "座位已被預訂",
          text: "請選擇其他座位",
          icon: "error",
          confirmButtonText: "確定",
        });
        return;
      }

      setSelectedTable(tableNo);
      setFormData((prev) => ({ ...prev, tableNo }));
    } catch (error) {
      console.error("檢查座位狀態失敗:", error);
      Swal.fire({
        title: "錯誤",
        text: error.message || "請稍後再試",
        icon: "error",
        confirmButtonText: "確定",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      Swal.fire({
        title: "請先登入",
        text: "需要登入才能進行訂位",
        icon: "warning",
        confirmButtonText: "前往登入",
        showCancelButton: true,
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    if (
      !formData.name ||
      !formData.date ||
      !formData.time ||
      !formData.phone ||
      !formData.people ||
      !formData.tableNo
    ) {
      Swal.fire({
        title: "提示",
        text: t("reservation.pleaseCompleteForm"),
        icon: "warning",
        confirmButtonText: "確定",
      });
      return;
    }

    const phoneRegex = /^09\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        title: "提示",
        text: "請輸入正確的手機號碼格式",
        icon: "warning",
        confirmButtonText: "確定",
      });
      return;
    }

    const reservationData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      people: formData.people,
      tableNo: formData.tableNo,
    };

    try {
      await reservationApi.addReservation(reservationData);
      Swal.fire({
        title: "預約成功！",
        text: "您可以在會員中心查看訂位資訊",
        icon: "success",
        confirmButtonText: "確定",
      }).then(() => {
        navigate("/member");
      });
    } catch (error) {
      console.error("預約失敗:", error);
      Swal.fire({
        title: "預約失敗",
        text: error.message || "請稍後再試",
        icon: "error",
        confirmButtonText: "確定",
      });
    }
  };

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 px-6 py-2.5 text-lg text-main-color-yellow 
                   border-2 border-main-color-yellow rounded-lg
                   transition-all duration-300
                   hover:bg-main-color-yellow hover:text-black
                   active:scale-95"
        >
          {t("common.backToHome") || "回到首頁"}
        </button>

        <div
          className="box-border w-[80%] mx-auto mt-[100px] mb-[300px] flex justify-evenly items-center 
                      rounded-[20px] shadow-reservation bg-reservation-gradient
                      lg:w-[85%] md:w-[90%] sm:w-[95%]
                      lg:flex-row md:flex-col sm:flex-col
                      lg:gap-0 md:gap-[30px] sm:gap-[30px]"
        >
          <div
            className="w-[400px] box-border text-main-color-yellow leading-8 font-verdana 
                       font-bold text-xl flex flex-col justify-evenly bg-transparent 
                       backdrop-blur-10 px-8
                       lg:w-[400px] md:w-full sm:w-full md:max-w-[500px] sm:max-w-[500px]"
          >
            <h1
              className="text-center pb-title tracking-[10px] text-reservation font-bold 
                         text-shadow-reservation
                         md:text-2xl md:pb-[30px] sm:text-2xl sm:pb-[30px]"
            >
              {t("reservation.title")}
            </h1>

            <div className="w-full mb-[15px] flex">
              <input
                type="text"
                placeholder={t("reservation.namePlaceholder")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl outline-none bg-input-bg text-main-color-yellow 
                         text-center transition-all duration-300
                         focus:shadow-input-focus focus:border-[orangered]
                         placeholder:text-main-color-yellow"
              />
            </div>

            <div className="w-full mb-[15px] flex">
              <input
                type="email"
                placeholder={t("reservation.emailPlaceholder")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                         text-main-color-yellow text-center transition-all duration-300
                         focus:shadow-input-focus focus:border-[orangered]
                         placeholder:text-main-color-yellow"
                required
              />
            </div>

            <div className="w-full mb-[15px] flex">
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl outline-none bg-input-bg text-main-color-yellow 
                         text-center transition-all duration-300
                         focus:shadow-input-focus focus:border-[orangered]"
              />
            </div>

            <div
              className="flex gap-[15px] w-full mb-[10px]
                         md:flex-col sm:flex-col md:gap-[10px] sm:gap-[10px]"
            >
              <div className="flex-1">
                <select
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full h-[45px] p-[10px] border border-main-color-yellow 
                           rounded-[5px] text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                           text-main-color-yellow text-center transition-all duration-300
                           focus:shadow-input-focus focus:border-[orangered]
                           cursor-pointer [&>option]:bg-[#333] [&>option]:text-main-color-yellow 
                           [&>option]:p-[10px]"
                >
                  <option value="" disabled className="bg-[#333]">
                    {t("reservation.selectTime")}
                  </option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time} className="bg-[#333]">
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <select
                  value={formData.people}
                  onChange={(e) =>
                    setFormData({ ...formData, people: e.target.value })
                  }
                  className="w-full h-[45px] p-[10px] border border-main-color-yellow 
                           rounded-[5px] text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                           text-main-color-yellow text-center transition-all duration-300
                           focus:shadow-input-focus focus:border-[orangered]
                           cursor-pointer [&>option]:bg-[#333] [&>option]:text-main-color-yellow 
                           [&>option]:p-[10px]"
                >
                  <option value="" disabled className="bg-[#333]">
                    {t("reservation.selectPeople")}
                  </option>
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num} className="bg-[#333]">
                      {t("reservation.peopleCount", { count: num })}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full mb-[15px] flex">
              <input
                type="text"
                placeholder={t("reservation.tablePlaceholder")}
                value={formData.tableNo}
                readOnly
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                         text-main-color-yellow text-center transition-all duration-300
                         focus:shadow-input-focus focus:border-[orangered]
                         placeholder:text-main-color-yellow"
              />
            </div>

            <div className="w-full mb-[15px] flex">
              <input
                type="number"
                placeholder={t("reservation.phonePlaceholder")}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                         text-main-color-yellow text-center transition-all duration-300
                         focus:shadow-input-focus focus:border-[orangered]
                         placeholder:text-main-color-yellow
                         [appearance:textfield]
                         [&::-webkit-outer-spin-button]:appearance-none
                         [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="px-[15px] py-[10px] font-bold mt-[25px] mx-auto mb-0 
                           text-xl leading-6 text-[#3b3a3a] bg-main-color-yellow 
                           rounded-[10px] border-none transition-all duration-500 
                           text-center hover:scale-110 hover:bg-[rgb(255,120,0)] 
                           hover:text-[#f0e68c] active:scale-90 active:shadow-btn"
            >
              {t("reservation.submit")}
            </button>
          </div>

          {/* 右側座位選擇區域 - 改為按鈕形式 */}
          <div className="flex flex-col justify-start items-center lg:px-16 md:px-8 sm:px-4 w-full max-w-[500px]">
            <div className="relative w-full bg-black/10 backdrop-blur-[2px] rounded-[20px] p-8">
              <div className="grid grid-cols-2 gap-6">
                {tableList.map((tableId) => (
                  <button
                    key={tableId}
                    onClick={() => handleTableClick(tableId)}
                    className={`relative flex items-center justify-center p-5 rounded-xl
                    border-2 transition-all duration-300 
                    backdrop-blur-sm
                    ${
                      selectedTable === tableId
                        ? "border-main-color-yellow bg-main-color-yellow/10 text-main-color-yellow shadow-lg"
                        : "border-main-color-yellow/30 hover:border-main-color-yellow hover:bg-black/20"
                    }
                    group`}
                  >
                    <img
                      src={tableId.startsWith("C") ? table4 : table2}
                      alt={`Table ${tableId}`}
                      className={`w-14 h-14 object-contain transition-all duration-300
                     ${
                       selectedTable === tableId
                         ? "opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                         : "opacity-80 group-hover:opacity-100"
                     }`}
                    />
                    <span
                      className={`ml-3 font-bold text-2xl tracking-wider
                        transition-all duration-300
                        ${
                          selectedTable === tableId
                            ? "text-main-color-yellow drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            : "text-main-color-yellow/70 group-hover:text-main-color-yellow"
                        }`}
                    >
                      {tableId}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
