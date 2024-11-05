import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import "./index.css";

const Reservation = () => {
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
    <div className="reservation-section">
      <div className="reservation-form">
        <h1 className="reservation-title text-3xl font-bold tracking-wider mb-12">
          {t("reservation.title")}
        </h1>

        <div className="form-name">
          <input
            className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            type="text"
            placeholder={t("reservation.namePlaceholder")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-date">
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div className="form-row">
          <div className="form-time">
            <select
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            >
              <option value="" disabled>
                {t("reservation.selectTime")}
              </option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="form-select">
            <select
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
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
        </div>

        <div className="form-name">
          <input
            type="number"
            placeholder={t("reservation.phonePlaceholder")}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="form-name">
          <input
            type="email"
            placeholder={t("reservation.emailPlaceholder")}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="form-name">
          <input
            type="text"
            placeholder={t("reservation.tablePlaceholder")}
            value={formData.tableNo}
            readOnly
          />
        </div>

        <button className="form-btn hover:bg-orange-600 active:bg-orange-700 transition-all duration-300">
          {t("reservation.submit")}
        </button>
      </div>

      <div className="reservation-seating">
        <div className={`seating-grid ${selectedTable ? "has-selected" : ""}`}>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "A1" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("A1")}
            >
              A1
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "A2" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("A2")}
            >
              A2
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "A3" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("A3")}
            >
              A3
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "B1" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("B1")}
            >
              B1
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "B2" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("B2")}
            >
              B2
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-img ${
                selectedTable === "B3" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("B3")}
            >
              B3
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-four ${
                selectedTable === "C1" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("C1")}
            >
              C1
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <div
              className={`table-four ${
                selectedTable === "C2" ? "selected" : ""
              }`}
              onClick={() => handleTableClick("C2")}
            >
              C2
            </div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
