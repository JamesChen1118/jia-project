import React from "react";
import NewsItem from "../../components/NewsItem";
import "./index.css";

const News = () => {
  return (
    <div className="newsPage">
      <h1 className="newsTitle">最新消息</h1>
      <NewsItem />
    </div>
  );
};

export default News;
