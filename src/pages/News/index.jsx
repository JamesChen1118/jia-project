import React from "react";
import NewsItem from "@/components/NewsItem";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";

const News = () => {
  return (
    <>
      <GoTop />
      <ScrollToContent />
      <NewsItem />
    </>
  );
};

export default News;
