import Layout from "@/components/Layout";
import "./index.css";

const Reservation = () => {
  return (
    <div className="reservation-section">
      <div className="reservation-form">
      <h1 className="reservation-title">訂位資訊</h1>

        <div className="form-name">
          {/* <label>訂位大名 :</label> */}
          <input type="text" placeholder="請填寫姓名" />
        </div>
        <div className="form-date">
          {/* <label>訂位日期 :</label> */}
          <input type="date" />
        </div>
        <div className="form-time">
          {/* <label>訂位時段 :</label> */}
          <input type="time" />
        </div>
        <div className="form-name">
          {/* <label>電子信箱 :</label> */}
          <input type="email" placeholder="請填寫信箱" />
        </div>
        <div className="form-name">
          {/* <label>連絡電話 :</label> */}
          <input type="number" placeholder="請填寫手機號碼" />
        </div>
        <div className="form-select">
          {/* <label>訂位人數 :</label> */}
          <select name="select" id="#">
            <option value="" disabled selected>
              請選擇人數
            </option>
            <option value="1">1 位</option>
            <option value="2">2 位</option>
            <option value="3">3 位</option>
            <option value="4">4 位</option>
          </select>
        </div>

        <button className="form-btn">確認送出</button>
      </div>
  
      <div className="reservation-seating">

<div className="seating-grid">
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">A1</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">A2</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">A3</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item">
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
    </div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">B1</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">B2</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item">
        <div className="table-img">B3</div>
    </div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="table-four">C1</div>
    <div className="grid-item"></div>
    <div className="table-four">C2</div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
    <div className="grid-item"></div>
</div>
</div>

    </div>
  );
};

export default Reservation;
