import Layout from "@/components/Layout";
import "./index.css";

const Reservation = () => {
  return (
    <>
      <div className="reservation-section">
        <div className="reservation-form">
          <div className="form-name">
            <label>訂位大名 :</label>
            <input type="text" placeholder="請填寫姓名" />
          </div>
          <div className="form-date">
            <label>訂位日期 :</label>
            <input type="date" />
          </div>
          <div className="form-time">
            <label>訂位時段 :</label>
            <input type="time" />
          </div>
          <div className="form-name">
            <label>電子信箱 :</label>
            <input type="email" placeholder="請填寫信箱" />
          </div>
          <div className="form-name">
            <label>連絡電話 :</label>
            <input type="number" placeholder="請填寫手機號碼" />
          </div>
          <div className="form-select">
            <label>訂位人數 :</label>
            <select name="select" id="#">
              <option value="1">1 位</option>
              <option value="2">2 位</option>
              <option value="3">3 位</option>
              <option value="4">4 位</option>
            </select>
          </div>

          <button className="form-btn">確認送出</button>
        </div>
        <div className="reservation-img">
          <img src="./images/booking/reservation.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Reservation;
