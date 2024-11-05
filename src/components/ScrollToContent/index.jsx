import { useEffect } from "react";

const ScrollToContent = () => {
  useEffect(() => {
    const scrollToContentBottom = () => {
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      });
    };

    const timer = setTimeout(scrollToContentBottom, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ScrollToContent;
