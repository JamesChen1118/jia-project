import { Link } from "react-router-dom";
import "./index.css";
import Select from "react-select";

const options = [
  { value: "booking", label: "訂位詢問" },
  { value: "feedback", label: "服務意見" },
  { value: "collaboration", label: "活動合作" },
  { value: "receipt", label: "收據相關" },
  { value: "private-event", label: "包場需求" },
  { value: "customized", label: "客製洽談" },
  { value: "other", label: "其他" },
];

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "15px 0 15px 0",
    border: "1px solid rgb(255, 170, 13)",
    backgroundColor: "transparent",
    color: "rgb(255, 170, 13)",
    textAlign: "center",
    "&:hover": {
      border: "1px solid rgb(255, 170, 13)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(255, 170, 13)",
    textAlign: "center",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgb(255, 120, 0)",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "15px 0 15px 0",
    border: "1px solid rgb(255, 170, 13)",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // 添加背景顏色
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    backgroundColor: isFocused
      ? "rgba(255, 170, 13, 0.5)"
      : "rgba(255, 255, 255)",
    color: "black",
  }),
};

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <div className="contact-left">
          <h1 className="contact-title">聯絡我們</h1>
          <input className="contact-name" placeholder="請填寫姓名" />
          <input className="contact-phone" placeholder="請填寫手機號碼" />
          <input
            className="contact-email"
            placeholder="請填寫聯絡信箱"
            required
          />

          <div className="contact-row">
            <input className="contact-subject" placeholder="請填寫信件主旨" />
            <Select
              options={options}
              placeholder="請選擇類型"
              className="contact-select"
              styles={customSelectStyles}
            />
          </div>

          <textarea
            className="contact-content"
            rows="5"
            cols="60"
            placeholder="請填寫內容"
            required
          ></textarea>
          <button className="contact-btn">送出</button>
        </div>
        <div className="contact-right">
          <img src="https://picsum.photos/id/684/600/400" alt="" />
          <p>地址: 台北市松山區民生東路五段163-1號</p>
          <p>電話: (02)2388-8888</p>
          <p>Email: contact@jiaizakaya.com</p>
        </div>
      </div>
      <iframe
        className="contact-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.023512407435!2d121.5629083!3d25.0593151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8d9d238e55%3A0x3c19f236bf0fecac!2z5Y-w5YyX5biC5rCR55Sf56S-5Y2A5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1729574886171!5m2!1szh-TW!2stw"
        width="100%"
        height="350px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
