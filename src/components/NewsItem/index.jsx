import React from "react";

// 在這裡定義 newsItems 數據
const newsItems = [
  { date: "Nov.15.2024", title: "11月活動限定，生啤買一送一 ~!!!" },
  { date: "Dec.01.2024", title: "冬季新菜單上市，快來品嚐!" },
  { date: "Jan.05.2025", title: "新年特別優惠，訂位即送精美禮品" },
  { date: "Nov.15.2024", title: "11月活動限定，生啤買一送一 ~!!!" },
  { date: "Dec.01.2024", title: "冬季新菜單上市，快來品嚐!" },
  { date: "Jan.05.2025", title: "新年特別優惠，訂位即送精美禮品" },
  { date: "Nov.15.2024", title: "11月活動限定，生啤買一送一 ~!!!" },
  { date: "Dec.01.2024", title: "冬季新菜單上市，快來品嚐!" },
  { date: "Jan.05.2025", title: "新年特別優惠，訂位即送精美禮品" },
  { date: "Jan.05.2025", title: "新年特別優惠，訂位即送精美禮品" },
];

const NewsItem = ({ itemNumber }) => {
  const displayedItems = itemNumber ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="newsArea">
      <div className="newsItem">
        <div className="item">
          <div className="Txt">
            {displayedItems.map((item, index) => (
              <div className="top" key={index}>
                <div className="dateBox">
                  <div className="date">{item.date}</div>
                </div>
                <li className="title">{item.title}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
