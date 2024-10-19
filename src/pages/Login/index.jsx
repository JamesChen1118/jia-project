import { Link } from "react-router-dom";
import "./index.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="button-group">
            <div id="btn"></div>
            <button type="button" className="switch-btn" onclick="log()">
              登入頁面
            </button>
            <button type="button" className="switch-btn" onclick="reg()">
              註冊頁面
            </button>
          </div>

          <form id="login" className="input-group">
            <input
              type="text"
              className="input-text"
              placeholder="請輸入帳號"
              required
            />
            <input
              type="text"
              className="input-text"
              placeholder="請輸入密碼"
              required
            />
            <input type="checkbox" className="remember-box" />
            <span>記住密碼</span>
            <button type="submit" className="submit-btn">
              登入
            </button>
          </form>

          <form id="register" className="input-group">
            <input
              type="text"
              className="input-text"
              placeholder="請填寫帳號"
              required
            />
            <input
              type="number"
              className="input-text"
              placeholder="請填寫手機號碼"
              required
            />
            <input
              type="email"
              className="input-text"
              placeholder="請填寫信箱"
              required
            />
            <input
              type="password"
              className="input-text"
              placeholder="請填寫密碼"
              required
            />
            <input
              type="password"
              className="input-text"
              placeholder="再次輸入密碼"
              required
            />
            <button type="submit" className="submit-btn">
              註冊
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
