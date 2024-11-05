import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollToContent from "@/components/ScrollToContent";

const Member = () => {
  const [memberTable, setmemberTable] = useState("info");
  const { t } = useTranslation();

  const renderContent = () => {
    const memberInfo = {
      info: (
        <table className="member-table">
          <tbody>
            <tr>
              <td>{t("member.fields.name")}</td>
              <td>JAMES</td>
            </tr>
            <tr>
              <td>{t("member.fields.email")}</td>
              <td>james@example.com</td>
            </tr>
            <tr>
              <td>{t("member.fields.phone")}</td>
              <td>0912345678</td>
            </tr>
            <tr>
              <td>{t("member.fields.address")}</td>
              <td>{t("contact.address")}</td>
            </tr>
          </tbody>
        </table>
      ),
      orders: (
        <table className="member-table">
          <thead>
            <tr>
              <th>{t("member.table.orderNumber")}</th>
              <th>{t("member.table.date")}</th>
              <th>{t("member.table.amount")}</th>
              <th>{t("member.table.status")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JIA001</td>
              <td>2024-01-01</td>
              <td>NT$ 1,500</td>
              <td>{t("member.table.status")}</td>
            </tr>
          </tbody>
        </table>
      ),
      history: (
        <table className="member-table">
          <thead>
            <tr>
              <th>{t("member.table.productName")}</th>
              <th>{t("member.table.date")}</th>
              <th>{t("member.table.quantity")}</th>
              <th>{t("member.table.amount")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("products.items.productsItem8.name")}</td>
              <td>2023-04-20</td>
              <td>2</td>
              <td>NT$ 360</td>
            </tr>
          </tbody>
        </table>
      ),
    };

    return memberInfo[memberTable] || <div>請選擇一個選項</div>;
  };

  return (
    <>
      <ScrollToContent />
      <div
        className="w-[90%] lg:w-[80%] mx-auto mt-[120px] mb-[150px] 
                    flex flex-col lg:flex-row gap-8"
      >
        {/* 側邊選單 */}
        <div className="w-full lg:w-[250px] bg-[#333] rounded-xl p-6">
          <h2
            className="text-2xl font-bold text-main-color-yellow mb-8 
                       text-center"
          >
            {t("member.title")}
          </h2>
          <ul className="space-y-4">
            {["info", "orders", "history"].map((option) => (
              <li
                key={option}
                onClick={() => setmemberTable(option)}
                className={`py-2 px-4 rounded-lg cursor-pointer 
                           transition-all duration-300
                           ${
                             memberTable === option
                               ? "bg-main-color-yellow text-black"
                               : "text-white hover:bg-white/10"
                           }`}
              >
                {t(`member.${option}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* 內容區域 */}
        <div className="flex-1 bg-[#333] rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-color-yellow mb-6">
            {t(`member.${memberTable}`)}
          </h3>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Member;
