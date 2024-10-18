import { Link } from "react-router-dom";
import "./index.css";

const Booking = () => {
  return (
    <div className="booking">
        <Link to="/Order" className="booking-btn">外帶</Link>
        <Link to="/Reservation" className="booking-btn">內用</Link>
    </div>
  );
};

export default Booking;
