import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import "../../components/Buttons/buttons.css";
import { userApi } from "@/api/user.js";
import { setToken, getToken } from "@/utils/auth.js";
import "./index.css";

const Login = () => {
  const { t } = useTranslation();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (btnRef.current && loginFormRef.current && registerFormRef.current) {
      if (isLoginForm) {
        btnRef.current.style.left = "0";
        loginFormRef.current.style.left = "110px";
        registerFormRef.current.style.left = "650px";
      } else {
        btnRef.current.style.left = "150px";
        loginFormRef.current.style.left = "-400px";
        registerFormRef.current.style.left = "110px";
      }
    }
  }, [isLoginForm]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      message.warning(t("login_empty"));
      return;
    }

    userApi
      .login(username, password)
      .then(({ token }) => {
        setToken(token);
        message.success(t("login_success"));
        navigate("/");
      })
      .catch((err) => {
        message.error(t("login_fail"));
        console.error(err);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="button-group">
          <div id="btn" ref={btnRef}></div>
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

        <form
          onSubmit={handleLogin}
          id="login"
          className="input-group"
          ref={loginFormRef}
        >
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

        <form
          onSubmit={handleRegister}
          id="register"
          className="input-group"
          ref={registerFormRef}
        >
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
  );
};

export default Login;
