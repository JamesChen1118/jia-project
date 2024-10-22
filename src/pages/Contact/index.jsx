import { Link } from "react-router-dom";
import "./index.css";

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <div className="contact-left">
          <h1 className="contact-title">聯絡我們</h1>{" "}
          <input className="contact-name" placeholder="請填寫姓名" />{" "}
          <input className="contact-phone" placeholder="請填寫手機號碼" />
          <input
            className="contact-email"
            placeholder="請填寫聯絡信箱"
            required
          />
          <input className="contact-subject" placeholder="請填寫聯絡主旨" />
          <select className="contact-type" required>
            <option className="contact-option" value="" disabled selected>
              請選擇信件主旨
            </option>
            <option value="booking">訂位詢問</option>
            <option value="feedback">服務意見</option>
            <option value="collaboration">活動合作</option>
            <option value="receipt">收據相關</option>
            <option value="private-event">包場需求</option>
            <option value="customized">客製洽談</option>
            <option value="other">其他</option>
          </select>
          <textarea
            className="contact-content"
            rows="5"
            cols="60"
            placeholder="請填寫內容"
            required
          ></textarea>
          <button className="contact-btn">送出</button>
        </div>{" "}
        <div className="contact-right">
          <img src="https://picsum.photos/id/684/600/400" alt="" />{" "}
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
