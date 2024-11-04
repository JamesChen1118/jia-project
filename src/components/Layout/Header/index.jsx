import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBars,
  faTimes,
  faShoppingCart,
  faGlobe,
  faUser,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getToken, removeToken } from "@/utils/auth";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useUserStore } from "@/store/lang.js";

const languageList = {
  zh: "zh_TW",
  en: "en_US",
};

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language, setLanguage } = useUserStore();
  let scrollTimeout;

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const changeLanguage = () => {
    const newLang =
      language === languageList.zh ? languageList.en : languageList.zh;
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-10 
        transition-all duration-500 ease-in-out
        bg-black
        transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="px-5 w-full h-24 flex justify-between items-center">
        <h2 className="pl-[60px] md:pl-[30px] sm:pl-5">
          <button
            onClick={handleLogoClick}
            className="text-main-color-yellow no-underline font-verdana font-bold text-4xl 
                     transition-all duration-300 ease-in-out
                     hover:text-shadow-lg hover:scale-110"
          >
            J I A
          </button>
        </h2>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-main-text-white text-2xl p-2 hover:text-main-color-yellow"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center">
          {[
            { name: "About", special: false },
            { name: "News", special: false },
            { name: "Booking", special: true },
            { name: "Menu", special: false },
            { name: "Contact", special: false },
          ].map((item) => (
            <li key={item.name} className="px-10 text-xl flex items-center">
              <button
                onClick={() => navigate(`/${item.name.toLowerCase()}`)}
                className={
                  item.special
                    ? "px-5 py-2.5 bg-main-color-yellow rounded-xl font-medium text-black transition-all duration-700 ease-in-out hover:tracking-letterSpacing-3 hover:scale-110 hover:px-[30px] hover:py-[10px] hover:shadow-lg"
                    : "text-main-text-white hover:text-main-color-yellow no-underline transition-all duration-300 ease-in-out relative before:absolute before:bottom-0 before:left-[50%] before:w-0 before:h-0.5 before:bg-main-color-yellow before:transition-all before:duration-300 hover:before:w-[50%] after:absolute after:bottom-0 after:right-[50%] after:w-0 after:h-0.5 after:bg-main-color-yellow after:transition-all after:duration-300 hover:after:w-[50%]"
                }
              >
                {t(item.name)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`
            fixed top-24 left-0 w-full bg-black/95 transform transition-transform duration-300 ease-in-out lg:hidden
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <ul className="flex flex-col items-center justify-evenly min-h-[300px] py-6">
            {["About", "News", "Menu", "Contact"].map((item) => (
              <li
                key={item}
                className="w-full text-center flex items-center justify-center"
              >
                <button
                  onClick={() => {
                    navigate(`/${item.toLowerCase()}`);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-main-text-white hover:text-main-color-yellow text-xl w-full py-3
                           transition-all duration-300 ease-in-out relative
                           before:absolute before:bottom-0 before:left-[50%] 
                           before:w-0 before:h-0.5 before:bg-main-color-yellow
                           before:transition-all before:duration-300
                           hover:before:w-[50%]
                           after:absolute after:bottom-0 after:right-[50%] 
                           after:w-0 after:h-0.5 after:bg-main-color-yellow
                           after:transition-all after:duration-300
                           hover:after:w-[50%]"
                >
                  {t(item)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 pr-[60px] md:pr-[30px] sm:pr-5">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-main-text-white text-2xl p-1.5 hover:text-main-color-yellow hover:scale-110"
            >
              <FontAwesomeIcon icon={faCircleUser} />
            </button>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 w-48 bg-black/95 border border-[#ddd] rounded-md shadow-custom py-1 z-10">
                {isLoggedIn ? (
                  <>
                    <li>
                      <button
                        onClick={() => {
                          navigate("/member");
                          setShowDropdown(false);
                        }}
                        className="block px-4 py-2 text-base text-main-text-white hover:text-main-color-yellow hover:bg-transparent-light cursor-pointer w-full text-left transition-all duration-500 ease-in-out"
                      >
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        {t("Member")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-base text-main-text-white hover:text-main-color-yellow hover:bg-transparent-light cursor-pointer w-full text-left transition-all duration-500 ease-in-out"
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        {t("Logout")}
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setShowDropdown(false);
                      }}
                      className="block px-4 py-2 text-base text-main-text-white hover:text-main-color-yellow hover:bg-transparent-light cursor-pointer w-full text-left transition-all duration-500 ease-in-out"
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                      {t("Login")}
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
          <Link
            to="/shoppingCart"
            className="text-main-text-white text-2xl p-1.5 hover:text-main-color-yellow hover:scale-110"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <button
            onClick={changeLanguage}
            className="text-main-text-white text-2xl p-1.5 hover:text-main-color-yellow hover:scale-110"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span className="ml-1">
              {language === languageList.zh ? "En" : "繁中"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
