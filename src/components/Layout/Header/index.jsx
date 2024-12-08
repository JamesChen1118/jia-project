import { useState, useEffect, useRef } from "react";
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
import i18n from "@/i18n/index.js";
import { useUserStore } from "@/store/lang.js";
import { useCartStore } from "@/store/shopping";

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
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useUserStore();
  const cartItems = useCartStore((state) => state.cartItems);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.numbers,
    0
  );

  useEffect(() => {
    if (cartItemCount > 0) {
      setIsCartAnimating(true);
      setTimeout(() => setIsCartAnimating(false), 1000);
    }
  }, [cartItemCount]);

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

  const handleLanguageChange = () => {
    const newLang = language === "zh_TW" ? "en_US" : "zh_TW";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { name: "about", special: false },
    { name: "news", special: false },
    { name: "booking", special: true },
    { name: "menu", special: false },
    { name: "contact", special: false },
  ].map((item) => ({
    ...item,
    translationKey: `header.${item.name}`,
  }));

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="toggle-menu"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="px-5 w-full h-24 flex justify-between items-center bg-black">
        <h2 className="pl-[60px] md:pl-[30px] sm:pl-5">
          <button
            onClick={handleLogoClick}
            className="text-main-color-yellow no-underline font-verdana font-bold 
                     text-4xl lg:text-3xl xl:text-4xl 
                     transition-all duration-300 ease-in-out
                     hover:text-shadow-lg hover:scale-110"
          >
            J I A
          </button>
        </h2>

        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <button
            aria-label="toggle-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-main-text-white text-2xl p-2 hover:text-main-color-yellow
                      transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <ul className="hidden lg:flex items-center justify-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="px-4 lg:px-6 xl:px-10 text-base lg:text-lg xl:text-xl flex items-center"
            >
              <button
                onClick={() => navigate(`/${item.name}`)}
                className={
                  item.special
                    ? "px-4 lg:px-5 py-2 bg-main-color-yellow rounded-xl font-medium text-black text-base lg:text-lg xl:text-xl transition-all duration-700 ease-in-out hover:tracking-letterSpacing-3 hover:scale-110"
                    : "text-main-text-white hover:text-main-color-yellow text-base lg:text-lg xl:text-xl no-underline transition-all duration-300 ease-in-out relative before:absolute before:bottom-0 before:left-[50%] before:w-0 before:h-0.5 before:bg-main-color-yellow before:transition-all before:duration-300 hover:before:w-[50%] after:absolute after:bottom-0 after:right-[50%] after:w-0 after:h-0.5 after:bg-main-color-yellow after:transition-all after:duration-300 hover:after:w-[50%]"
                }
              >
                {t(item.translationKey)}
              </button>
            </li>
          ))}
        </ul>

        <div
          ref={mobileMenuRef}
          className={`
            fixed top-24 left-0 w-full bg-black/95 
            transform transition-all duration-500 ease-in-out lg:hidden
            ${isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
            }
            z-20
          `}
        >
          <ul className="flex flex-col items-center justify-evenly min-h-[300px] py-6">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="w-full text-center flex items-center justify-center
                           transform transition-all duration-500 ease-in-out"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen 
                    ? 'translateY(0)' 
                    : 'translateY(-20px)'
                }}
              >
                <button
                  onClick={() => {
                    navigate(`/${item.name}`);
                    setIsMobileMenuOpen(false);
                  }}
                  className={
                    item.special
                      ? "text-black bg-main-color-yellow px-8 py-2 rounded-xl text-xl w-auto mx-4 transition-all duration-300 ease-in-out hover:scale-105"
                      : "text-main-text-white hover:text-main-color-yellow text-xl w-full py-3 transition-all duration-300 ease-in-out"
                  }
                >
                  {t(item.translationKey)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 pr-[60px] md:pr-[30px] sm:pr-5">
          <div className="relative" ref={dropdownRef}>
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
                        {t("header.member")}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-base text-main-text-white hover:text-main-color-yellow hover:bg-transparent-light cursor-pointer w-full text-left transition-all duration-500 ease-in-out"
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        {t("header.logout")}
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
                      {t("header.login")}
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
          <Link
            to="/shoppingCart"
            className="relative text-main-text-white text-2xl p-1.5 hover:text-main-color-yellow hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={`${isCartAnimating ? "animate-bounce" : ""}`}
            />
            {cartItemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                              w-5 h-5 rounded-full flex items-center justify-center
                              animate-pulse"
              >
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            onClick={handleLanguageChange}
            className="text-main-text-white text-2xl p-1.5 hover:text-main-color-yellow hover:scale-110"
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span className="ml-1">{language === "zh_TW" ? "En" : "繁中"}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
