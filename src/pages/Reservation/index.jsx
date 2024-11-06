import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import table2 from "../../assets/images/reservation/seat-2-1.png";
import table4 from "../../assets/images/reservation/table-4.png";
import { useNavigate } from "react-router-dom";

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

  // 生成時間選項
  const generateTimeOptions = () => {
    const times = [];
    // 午餐時段 11:30-14:30
    for (let i = 11.5; i <= 14.5; i += 0.5) {
      const hour = Math.floor(i);
      const minute = i % 1 === 0 ? "00" : "30";
      times.push(`${hour}:${minute}`);
    }
    // 晚餐時段 17:30-22:30
    for (let i = 17.5; i <= 22.5; i += 0.5) {
      const hour = Math.floor(i);
      const minute = i % 1 === 0 ? "00" : "30";
      times.push(`${hour}:${minute}`);
    }
    return times;
  };

  // 處理座位選擇
  const handleTableClick = (tableNo) => {
    setSelectedTable(tableNo);
    setFormData((prev) => ({ ...prev, tableNo }));
  };

  return (
    <>
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
          {/* 表單區域 */}
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
                  {generateTimeOptions().map((time) => (
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

            {/* 新增座位號碼輸入框 */}
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

            {/* 新增電話號碼輸入框 */}
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
              className="px-[15px] py-[10px] font-bold mt-[25px] mx-auto mb-0 
                           text-xl leading-6 text-[#3b3a3a] bg-main-color-yellow 
                           rounded-[10px] border-none transition-all duration-500 
                           text-center hover:scale-110 hover:bg-[rgb(255,120,0)] 
                           hover:text-[#f0e68c] active:scale-90 active:shadow-btn"
            >
              {t("reservation.submit")}
            </button>
          </div>

          {/* 座位區域 */}
          <div className="flex justify-center items-center px-16">
            <div
              className={`w-[500px] h-[400px] my-[80px] mx-auto 
                bg-[url('https://images.unsplash.com/photo-1704135520525-f6d7bb8d1129?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                bg-cover bg-[rgba(255,245,245,0.723)] bg-blend-overlay 
                rounded-[20px] grid grid-cols-6 grid-rows-6 gap-1
                lg:w-[500px] md:w-full sm:w-full 
                lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px]
                lg:h-[400px] md:h-[350px] sm:h-[300px]
                place-items-center
                ${
                  selectedTable
                    ? "[&_.table-img:not(.selected)]:opacity-30 [&_.table-img:not(.selected)]:bg-black/70 [&_.table-img:not(.selected)]:brightness-50 [&_.table-img:not(.selected)]:text-white/50" +
                      "[&_.table-four:not(.selected)]:opacity-30 [&_.table-four:not(.selected)]:bg-black/70 [&_.table-four:not(.selected)]:brightness-50 [&_.table-four:not(.selected)]:text-white/50"
                    : ""
                }`}
            >
              {[...Array(36)].map((_, index) => {
                const row = Math.floor(index / 6);
                const col = index % 6;
                let tableId = null;

                // 定義座位位置
                if (row === 0 && col === 1) tableId = "A1";
                if (row === 0 && col === 3) tableId = "A2";
                if (row === 0 && col === 5) tableId = "A3";
                if (row === 2 && col === 1) tableId = "B1";
                if (row === 2 && col === 3) tableId = "B2";
                if (row === 2 && col === 5) tableId = "B3";
                if (row === 4 && col === 1) tableId = "C1";
                if (row === 4 && col === 3) tableId = "C2";

                return (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center items-center
                                text-main-color-yellow rounded-[10px] bg-transparent 
                                text-base text-center relative"
                  >
                    {tableId && (
                      <div
                        className={`absolute inset-0 m-auto bg-contain bg-center bg-no-repeat
                                 flex justify-center items-center text-main-color-yellow 
                                 font-bold text-[32px] md:text-[24px] sm:text-[20px]
                                 rounded-[50px] cursor-pointer
                                 transition-all duration-500 ease-in-out
                                 hover:bg-white/50 hover:scale-[1.2]
                                 text-shadow-table
                                 ${tableId.startsWith("C") ? "w-full" : ""}
                                 ${
                                   selectedTable === tableId
                                     ? "border-2 border-main-color-yellow opacity-100 brightness-100 bg-transparent text-main-color-yellow"
                                     : ""
                                 }`}
                        onClick={() => handleTableClick(tableId)}
                        style={{
                          backgroundImage: `url(${
                            tableId.startsWith("C") ? table4 : table2
                          })`,
                        }}
                      >
                        {tableId}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
