import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-logo">J I A</h2>
      <p>&copy; JIA 2024 - Modern Creative Izakaya</p>
      <div className="social-icons">
        <Link to="#" className="icon-btn">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="#" className="icon-btn">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="#" className="icon-btn">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
