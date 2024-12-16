import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-20 right-4 bg-main-color-yellow rounded-full p-3 
                  cursor-pointer transition-opacity duration-300 z-[9999]
                  ${isVisible ? "opacity-50 hover:opacity-100" : "opacity-0"}`}
      onClick={scrollToTop}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </motion.div>
  );
};

export default GoTop;
