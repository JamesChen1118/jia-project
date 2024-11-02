import React from "react";
import NewsItem from "@/components/NewsItem";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-60vh px-4 pb-72 pt-10">
      <h1 className="text-4xl font-bold text-center text-main-color-orange mb-8">
        {t("news.title")}
      </h1>
      <NewsItem />
    </div>
  );
};

export default News;
