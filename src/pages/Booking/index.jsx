import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div className="booking">
      <button onClick={() => navigate("/Order")} className="booking-btn">
        外帶
      </button>
      <button onClick={() => navigate("/Reservation")} className="booking-btn">
        內用
      </button>
    </div>
  );
};

export default Booking;
