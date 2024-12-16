import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="py-3 h-[120px] text-lg text-main-color-yellow bg-[rgb(26,26,26)] 
                     flex justify-around items-center flex-nowrap"
    >
      <h2 className="font-verdana font-bold text-3xl lg:text-3xl md:text-2xl sm:text-xl text-main-color-yellow whitespace-nowrap">
        J I A
      </h2>

      <p className="whitespace-nowrap text-sm md:text-base">
        <span className="block sm:hidden">© JIA 2024</span>
        <span className="hidden sm:block">
          © JIA 2024 - Modern Creative Izakaya
        </span>
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
