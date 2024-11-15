import React from "react";
import NewsItem from "@/components/NewsItem";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="w-full min-h-60vh px-4 pb-72 pt-10">
        <NewsItem />
      </div>
    </>
  );
};

export default News;
