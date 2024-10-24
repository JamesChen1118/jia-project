import React, { useState } from "react";
import "./index.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = (type) => {
    setIsLogin(type === "login");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="button-group">
          <div id="btn" style={{ left: isLogin ? "0" : "150px" }}></div>
          <button
            type="button"
            className="switch-btn"
            onClick={() => handleSwitch("login")}
          >
            登入頁面
          </button>
          <button
            type="button"
            className="switch-btn"
            onClick={() => handleSwitch("register")}
          >
            註冊頁面
          </button>
        </div>

        <form
          id="login"
          className="input-group"
          style={{ left: isLogin ? "110px" : "-530px" }}
        >
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
          <span className="remember-text">記住帳號</span>
          <button type="submit" className="submit-btn">
            登入
          </button>
        </form>

        <form
          id="register"
          className="input-group"
          style={{ left: isLogin ? "650px" : "120px" }}
        >
          <input
            type="text"
            className="input-text"
            placeholder="請填寫帳號"
            required
          />
          <input
            type="text"
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
  );
};

export default Login;
