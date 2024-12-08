import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createReservation } from "@/api/module/reservation";
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
  const { user, isLoggedIn } = useAuthStore();

  const [formData, setFormData] = useState({
    name: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    date: "",
    time: "",
    people: "",
    tableNo: "",
  });

  const userFields = (
    <>
      <div className="w-full mb-[15px] flex">
        <input
          type="text"
          value={formData.name}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-input-bg text-main-color-yellow/70 
                   text-center cursor-not-allowed"
        />
      </div>
      <div className="w-full mb-[15px] flex">
        <input
          type="email"
          value={formData.email}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-input-bg text-main-color-yellow/70 
                   text-center cursor-not-allowed"
        />
      </div>
      <div className="w-full mb-[15px] flex">
        <input
          type="text"
          value={formData.phone}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-input-bg text-main-color-yellow/70 
                   text-center cursor-not-allowed"
        />
      </div>
    </>
  );

  const handleTableClick = (tableNo) => {
    if (!formData.date || !formData.time) {
      Swal.fire({
        title: "提示",
        text: "請先選擇日期和時間",
        icon: "warning",
        confirmButtonText: "確定",
      });
      return;
    }

    setFormData((prev) => ({ ...prev, tableNo }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      Swal.fire({
        title: t("login.required"),
        text: t("login.reservation_hint"),
        icon: "warning",
        confirmButtonText: t("login.submit"),
        showCancelButton: true,
        cancelButtonText: t("common.cancel"),
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    try {
      const reservationData = {
        name: user.username,
        date: formData.date,
        time: formData.time,
        people: formData.people,
        tableNo: formData.tableNo,
        phone: user.phone,
        email: user.email,
      };

      await createReservation(reservationData);

      Swal.fire({
        title: t("reservation.success"),
        text: t("reservation.success_message"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      }).then(() => {
        navigate("/member", {
          state: { activeTab: "reservations" },
        });
      });
    } catch (error) {
      Swal.fire({
        title: t("reservation.fail"),
        text: error.message || t("reservation.error_message"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
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

            <div className="w-full mb-[15px] flex">{userFields}</div>

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
                      formData.tableNo === tableId
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
                       formData.tableNo === tableId
                         ? "opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                         : "opacity-80 group-hover:opacity-100"
                     }`}
                    />
                    <span
                      className={`ml-3 font-bold text-2xl tracking-wider
                        transition-all duration-300
                        ${
                          formData.tableNo === tableId
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
