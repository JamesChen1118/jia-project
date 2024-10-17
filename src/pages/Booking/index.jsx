import { Link } from "react-router-dom";
import "./index.css";

const Booking = () => {
  return (
    <div className="booking">
      <div className="order">
        <Link to="/Order">外帶</Link>
      </div>
      <div className="reservation">
        <Link to="/Reservation">內用</Link>
      </div>
    </div>
  );
};

export default Booking;
