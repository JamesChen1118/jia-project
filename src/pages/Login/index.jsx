import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "../../components/Buttons/buttons.css";
import { userApi } from "@/api/user.js";
import { setToken, getToken } from "@/utils/auth.js";
import "./index.css";

// api => 網址: HTTP協議+域名+路徑+PORT+查詢字串
// api => 協議+請求域名(資料庫)+路徑(拿什麼)+請求方法+(請求體)

// JWT => 登入狀況 => 登入核心: 是否有 token
// 表單驗證 => 前端帳密給後端 => 後端到資料庫確認身份 => token傳給前端
// 前端將token存在本地(localStorage, cookie)
// zustand

// zustand
// 翻譯
// express + 不會開資料庫 => 開server串好 獲取產品的 api
// 外帶: 分類 加入產品 移除產品 購物車(總金額、付款方式) 信用卡
// 內用: 訂位資訊 選訂位 + 資料庫

// 查詢外帶訂單(待做)

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      message.warning("請輸入使用者名稱或密碼");
      return;
    }
    try {
      const { token } = await userApi.login(username, password);
      setToken(token);
      navigate("/");
      message.success("登入成功");
    } catch (err) {
      message.error("使用者名稱或密碼錯誤");
      console.error(err);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // 實現註冊邏輯
    message.info("註冊功能尚未實現");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="button-group">
          <div id="login-btn"></div>
          <button
            type="button"
            className="switch-btn"
            onClick={() => setIsLoginForm(true)}
          >
            登入頁面
          </button>
          <button
            type="button"
            className="switch-btn"
            onClick={() => setIsLoginForm(false)}
          >
            註冊頁面
          </button>
        </div>

        {isLoginForm ? (
          <form onSubmit={handleLogin} id="login" className="input-group">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="input-text"
              placeholder="請輸入帳號"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input-text"
              placeholder="請輸入密碼"
            />
            <div className="remember-box">
              <input type="checkbox" className="remember-checkbox" />
              <span className="remember-text">記住帳號</span>
            </div>

            <button type="submit" className="submit-btn">
              登入
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} id="register" className="input-group">
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
        )}
      </div>
    </div>
  );
};

export default Login;
