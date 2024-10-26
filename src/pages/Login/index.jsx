import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "./index.css";
import "../../components/Buttons/buttons.css";
import { userApi } from "@/api/user";
import { setToken, getToken } from "@/utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSwitch = (type) => {
    setIsLogin(type === "login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      message.warning("請輸入使用者名稱或密碼");
      return;
    }

    userApi
      .login(username, password)
      .then(({ token }) => {
        setToken(token);
        navigate("/");
        message.success("登入成功");
      })
      .catch((err) => {
        message.error("使用者名稱或密碼錯誤");
        console.error(err);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    message.info("註冊功能尚未實現");
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
          onSubmit={handleLogin}
        >
          <input
            type="text"
            className="input-text"
            placeholder="請輸入帳號"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="input-text"
            placeholder="請輸入密碼"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onSubmit={handleRegister}
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
