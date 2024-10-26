import React, { useState } from "react";
import "./index.css";

const Member = () => {
  const [memberTable, setmemberTable] = useState("info");

  const renderContent = () => {
    const memberInfo = {
      info: (
        <table className="member-table">
          <tbody>
            <tr>
              <td>姓名</td>
              <td>JAMES</td>
            </tr>
            <tr>
              <td>電子郵件</td>
              <td>james@example.com</td>
            </tr>
            <tr>
              <td>電話</td>
              <td>0912345678</td>
            </tr>
            <tr>
              <td>地址</td>
              <td>台北市大安區忠孝東路四段216巷27弄5號</td>
            </tr>
          </tbody>
        </table>
      ),
      orders: (
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
              <td>JIA001</td>
              <td>2024-01-01</td>
              <td>NT$ 1,500</td>
              <td>已完成</td>
            </tr>
            <tr>
              <td>JIA002</td>
              <td>2024-01-01</td>
              <td>NT$ 2,000</td>
              <td>處理中</td>
            </tr>
          </tbody>
        </table>
      ),
      history: (
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
              <td>炙燒鮭魚握壽司</td>
              <td>2023-04-20</td>
              <td>2</td>
              <td>NT$ 360</td>
            </tr>
            <tr>
              <td>特選和牛燒肉</td>
              <td>2023-05-05</td>
              <td>1</td>
              <td>NT$ 580</td>
            </tr>
            <tr>
              <td>生啤酒（大）</td>
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
        <h2 id="member-title">會員中心</h2>
        <ul className="member-categories">
          <li
            className={`member-option ${
              memberTable === "info" ? "active" : ""
            }`}
            onClick={() => setmemberTable("info")}
          >
            會員資訊
          </li>
          <li
            className={`member-option ${
              memberTable === "orders" ? "active" : ""
            }`}
            onClick={() => setmemberTable("orders")}
          >
            訂單查詢
          </li>
          <li
            className={`member-option ${
              memberTable === "history" ? "active" : ""
            }`}
            onClick={() => setmemberTable("history")}
          >
            消費紀錄
          </li>
        </ul>
      </div>
      <div className="member-content">
        <h3>
          {memberTable === "info"
            ? "會員資訊"
            : memberTable === "orders"
            ? "訂單查詢"
            : "消費紀錄"}
        </h3>
        {renderContent()}
      </div>
    </div>
  );
};

export default Member;
