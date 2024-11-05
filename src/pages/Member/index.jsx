import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

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
            <tr>
              <td>JIA002</td>
              <td>2024-01-01</td>
              <td>NT$ 2,000</td>
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
            <tr>
              <td>{t("products.items.productsItem21.name")}</td>
              <td>2023-05-05</td>
              <td>1</td>
              <td>NT$ 580</td>
            </tr>
            <tr>
              <td>{t("products.items.productsItem35.name")}</td>
              <td>2023-05-05</td>
              <td>2</td>
              <td>NT$ 320</td>
            </tr>
          </tbody>
        </table>
      ),
    };

    return memberInfo[memberTable] || <div>請選擇一個選項</div>;
  };

  return (
    <div className="member-container">
      <div className="member-sidebar">
        <h2 id="member-title">{t("member.title")}</h2>
        <ul className="member-categories">
          <li
            className={`member-option ${
              memberTable === "info" ? "active" : ""
            }`}
            onClick={() => setmemberTable("info")}
          >
            {t("member.info")}
          </li>
          <li
            className={`member-option ${
              memberTable === "orders" ? "active" : ""
            }`}
            onClick={() => setmemberTable("orders")}
          >
            {t("member.orders")}
          </li>
          <li
            className={`member-option ${
              memberTable === "history" ? "active" : ""
            }`}
            onClick={() => setmemberTable("history")}
          >
            {t("member.history")}
          </li>
        </ul>
      </div>
      <div className="member-content">
        <h3>
          {memberTable === "info"
            ? t("member.info")
            : memberTable === "orders"
            ? t("member.orders")
            : t("member.history")}
        </h3>
        {renderContent()}
      </div>
    </div>
  );
};

export default Member;
