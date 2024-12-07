import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-3 h-[120px] text-lg text-main-color-yellow bg-[rgb(26,26,26)] 
                     flex justify-around items-center">
      <h2 className="font-verdana font-bold text-3xl text-main-color-yellow">
        J I A
      </h2>
      <p className="text-base">
        &copy; JIA 2024 - Modern Creative Izakaya
      </p>
      <div className="flex justify-center">
        <Link
          to="#"
          className="text-white text-xl mx-2 transition-all duration-300 
                   hover:text-main-color-yellow hover:scale-110 cursor-pointer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link
          to="#"
          className="text-white text-xl mx-2 transition-all duration-300 
                   hover:text-main-color-yellow hover:scale-110 cursor-pointer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          to="#"
          className="text-white text-xl mx-2 transition-all duration-300 
                   hover:text-main-color-yellow hover:scale-110 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer; 