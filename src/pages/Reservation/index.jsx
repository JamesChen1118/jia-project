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
  
      <div class="reservation-seating">

<div class="seating-grid">
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">A1</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">A2</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">A3</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item">
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
    </div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">B1</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">B2</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item">
        <div class="table-img">B3</div>
    </div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="table-four">C1</div>
    <div class="grid-item"></div>
    <div class="table-four">C2</div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
</div>
</div>

    </div>
  );
};

export default Reservation;
