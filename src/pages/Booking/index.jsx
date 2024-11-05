import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const Booking = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="booking">
      <button onClick={() => navigate("/Order")} className="booking-btn">
        {t("booking.takeout")}
      </button>
      <button onClick={() => navigate("/Reservation")} className="booking-btn">
        {t("booking.dineIn")}
      </button>
    </div>
  );
};

export default Booking;
