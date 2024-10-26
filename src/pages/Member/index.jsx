import React, { useState } from "react";
import "./index.css";

const Member = () => {
  const [activeTab, setActiveTab] = useState("info");

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <table className="member-table">
            <tbody>
              <tr>
                <td>姓名</td>
                <td>王小明</td>
              </tr>
              <tr>
                <td>電子郵件</td>
                <td>wang@example.com</td>
              </tr>
              <tr>
                <td>電話</td>
                <td>0912-345-678</td>
              </tr>
              <tr>
                <td>地址</td>
                <td>台北市松山區民生東路五段163-1號</td>
              </tr>
            </tbody>
          </table>
        );
      case "orders":
        return (
          <table className="member-table">
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>日期</th>
                <th>金額</th>
                <th>狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD001</td>
                <td>2023-05-01</td>
                <td>$1,500</td>
                <td>已完成</td>
              </tr>
              <tr>
                <td>ORD002</td>
                <td>2023-05-15</td>
                <td>$2,000</td>
                <td>處理中</td>
              </tr>
            </tbody>
          </table>
        );
      case "history":
        return (
          <table className="member-table">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>購買日期</th>
                <th>數量</th>
                <th>金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>商品A</td>
                <td>2023-04-20</td>
                <td>2</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>商品B</td>
                <td>2023-05-05</td>
                <td>1</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return <div>請選擇一個選項</div>;
    }
  };

  return (
    <div className="member-container">
      <div className="member-sidebar">
        <h2 id="member-title">會員中心</h2>
        <ul className="member-categories">
          <li
            className={`member-option ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            會員資訊
          </li>
          <li
            className={`member-option ${
              activeTab === "orders" ? "active" : ""
            }`}
            onClick={() => setActiveTab("orders")}
          >
            訂單查詢
          </li>
          <li
            className={`member-option ${
              activeTab === "history" ? "active" : ""
            }`}
            onClick={() => setActiveTab("history")}
          >
            購買紀錄
          </li>
        </ul>
      </div>
      <div className="member-content">
        <h3>
          {activeTab === "info"
            ? "會員資訊"
            : activeTab === "orders"
            ? "訂單查詢"
            : "購買紀錄"}
        </h3>
        {renderContent()}
      </div>
    </div>
  );
};

export default Member;
