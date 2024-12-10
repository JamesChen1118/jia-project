import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createReservation } from "@/api/module/reservation";
import GoTop from "@/components/GoTop";
import ScrollToContent from "@/components/ScrollToContent";
import table2 from "../../assets/images/reservation/seat-2-1.png";
import table4 from "../../assets/images/reservation/table-4.png";
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

const swalConfig = {
  background: "#333",
  color: "#E69539",
  confirmButtonColor: "#E69539",
  cancelButtonColor: "#666",
};

const Reservation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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

  const handleTableClick = (tableNo) => {
    if (!formData.date || !formData.time) {
      Swal.fire({
        ...swalConfig,
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
        ...swalConfig,
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
        ...swalConfig,
        title: t("reservation.success"),
        text: t("reservation.success_message"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      }).then(() => {
        navigate("/member", { state: { activeTab: "reservations" } });
      });
    } catch (error) {
      Swal.fire({
        ...swalConfig,
        title: t("reservation.fail"),
        text: error.message || t("reservation.error_message"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    }
  };

  const userFields = (
    <>
      <div className="w-full mb-[15px]">
        <input
          type="text"
          value={formData.name}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                   text-main-color-yellow text-center transition-all duration-300
                   focus:shadow-input-focus focus:border-[orangered]
                   cursor-not-allowed"
        />
      </div>
      <div className="w-full mb-[15px]">
        <input
          type="email"
          value={formData.email}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                   text-main-color-yellow text-center transition-all duration-300
                   focus:shadow-input-focus focus:border-[orangered]
                   cursor-not-allowed"
        />
      </div>
      <div className="w-full mb-[15px]">
        <input
          type="text"
          value={formData.phone}
          readOnly
          className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                   text-xl outline-none bg-[rgba(255,255,255,0.2)] 
                   text-main-color-yellow text-center transition-all duration-300
                   focus:shadow-input-focus focus:border-[orangered]
                   cursor-not-allowed"
        />
      </div>
    </>
  );

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
            className="w-[400px] text-main-color-yellow font-bold text-xl flex flex-col 
                          px-8 lg:w-[400px] md:w-full sm:w-full md:max-w-[500px]"
          >
            <h1
              className="text-center tracking-[10px] text-reservation font-bold text-shadow-reservation 
                           md:text-2xl md:pb-[30px]"
            >
              {t("reservation.title")}
            </h1>

            {userFields}

            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         text-xl bg-input-bg text-main-color-yellow text-center focus:shadow-input-focus 
                         focus:border-[orangered]"
            />

            <div className="flex gap-[15px] mt-4">
              <select
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                           bg-input-bg text-main-color-yellow focus:shadow-input-focus 
                           focus:border-[orangered]"
              >
                <option value="" disabled>
                  {t("reservation.selectTime")}
                </option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <select
                value={formData.people}
                onChange={(e) =>
                  setFormData({ ...formData, people: e.target.value })
                }
                className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                           bg-input-bg text-main-color-yellow focus:shadow-input-focus 
                           focus:border-[orangered]"
              >
                <option value="" disabled>
                  {t("reservation.selectPeople")}
                </option>
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {t("reservation.peopleCount", { count: num })}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              value={formData.tableNo}
              readOnly
              placeholder={t("reservation.tablePlaceholder")}
              className="w-full p-[10px] border border-main-color-yellow rounded-[5px] 
                         bg-input-bg text-main-color-yellow text-center placeholder:text-main-color-yellow 
                         focus:shadow-input-focus focus:border-[orangered] mt-4"
            />

            <button
              onClick={handleSubmit}
              className="px-[15px] py-[10px] font-bold mt-[25px] mx-auto mb-0 
                         text-xl leading-6 text-[#3b3a3a] bg-main-color-yellow 
                         rounded-[10px] border-none transition-all duration-500 
                         text-center hover:scale-110 hover:bg-[rgb(255,120,0)] 
                         hover:text-[#f0e68c] active:scale-90 active:shadow-btn"
            >
              確認送出
            </button>
          </div>

          <div className="flex flex-col items-center w-full max-w-[500px]">
            <div className="grid grid-cols-2 gap-6 w-full bg-black/10 p-8 rounded-[20px]">
              {tableList.map((tableId) => (
                <button
                  key={tableId}
                  onClick={() => handleTableClick(tableId)}
                  className={`p-5 rounded-xl border-2 ${
                    formData.tableNo === tableId
                      ? "bg-main-color-yellow/10 shadow-lg text-main-color-yellow"
                      : "border-main-color-yellow/30 hover:border-main-color-yellow"
                  }`}
                >
                  <img
                    src={tableId.startsWith("C") ? table4 : table2}
                    alt={`Table ${tableId}`}
                    className={`w-14 h-14 ${
                      formData.tableNo === tableId
                        ? "opacity-100"
                        : "opacity-80"
                    }`}
                  />
                  <span className="ml-3 font-bold text-2xl">{tableId}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
