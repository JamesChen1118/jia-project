import React from "react";

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
  const displayedItems = itemNumber
    ? newsItems.slice(0, itemNumber)
    : newsItems;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-transparent-light rounded-lg p-8 shadow-custom">
        <div className="space-y-4">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 p-4 border-b border-news-border hover:bg-news-hover transition-all duration-300 cursor-pointer"
            >
              <div className="w-48 shrink-0">
                <div className="font-crimson text-main-color-yellow text-lg">
                  {item.date}
                </div>
              </div>
              <div className="flex-1 text-main-text-white text-lg list-none hover:text-main-color-yellow transition-colors duration-300">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
