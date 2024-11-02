import React from "react";
import NewsItem from "@/components/NewsItem";

const News = () => {
  return (
    <div className="w-full min-h-60vh px-4 pb-72 pt-10">
      <h1 className="text-4xl font-bold text-center text-main-color-orange mb-8">
        最新消息
      </h1>
      <NewsItem />
    </div>
  );
};

export default News;
