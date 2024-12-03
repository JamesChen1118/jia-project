import React, { useState, useEffect } from "react";
import { newsApi } from "@/api/module/news"; // 引入 newsApi

const NewsItem = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 獲取新聞數據並設置到狀態
        const data = await newsApi.getNews();
        console.log("Fetched news data:", data); // 檢查返回的數據
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []); // 空依賴數組，意味著只在組件首次加載時調用

  // 渲染新聞項目
  if (!newsItems || newsItems.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div className="news-container">
      {newsItems.map((item, index) => (
        <div key={index} className="news-item">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
