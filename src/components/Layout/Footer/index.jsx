import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-logo">J I A</h2>
      <p>&copy; JIA 2024 - Modern Creative Izakaya</p>
      <div className="footer-media">
        <Link to="#">
          <i className="fa fa-facebook"></i>
        </Link>
        <Link to="#">
          <i className="fa fa-instagram"></i>
        </Link>
        <Link to="#">
          <i className="fa fa-twitter"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
