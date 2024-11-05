import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-form">
        <div className="contact-left">
          <h1 className="contact-title">{t("contact.title")}</h1>
          <input className="contact-name" placeholder={t("contact.name")} />
          <input className="contact-phone" placeholder={t("contact.phone")} />
          <input
            className="contact-email"
            placeholder={t("contact.email")}
            required
          />
          <input
            className="contact-subject"
            placeholder={t("contact.subject")}
          />
          <textarea
            className="contact-content"
            rows="5"
            cols="60"
            placeholder={t("contact.content")}
            required
          ></textarea>
          <button className="contact-btn" onClick={() => navigate("/Booking")}>
            {t("contact.submit")}
          </button>
        </div>
        <div className="contact-right">
          <img src="https://picsum.photos/id/684/600/400" alt="" />
          <p>{t("contact.address")}</p>
          <p>{t("contact.phone_number")}</p>
          <p>{t("contact.email_address")}</p>
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
