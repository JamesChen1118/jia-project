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
    <div className="w-1/2 mx-auto border-3 border-news-border cursor-pointer">
      <div className="bg-transparent-light p-8 rounded-lg">
        <div className="space-y-4">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center p-5 border-b border-dotted border-news-border group hover:bg-news-hover transition-all duration-300"
            >
              <div className="w-[120px] font-crimson text-news-text-gray text-sm tracking-letterSpacing-1 uppercase">
                {item.date}
              </div>
              <div className="flex-1 pl-4 pr-6 text-main-text-white text-sm font-light leading-relaxed tracking-wider list-none group-hover:text-main-color-yellow">
                {item.title}
              </div>
              <div className="absolute right-[50px] top-[40%] w-[10px] h-[10px] border-r-2 border-b-2 border-main-color-yellow rotate-[-45deg]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
