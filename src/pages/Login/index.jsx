import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { userApi } from "@/api/user.js";
import { setToken, getToken } from "@/utils/auth.js";

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
    <div className="mt-[200px] mx-auto">
      <div className="relative w-[600px] h-[700px] mx-auto bg-[rgba(41,40,40,0.7)] border-3 border-[rgba(255,255,255,0.2)] shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-[20px] p-[10px] rounded-[20px] overflow-hidden">
        <div className="w-[300px] mx-auto mt-[70px] relative bg-[rgba(161,167,142,0.2)] shadow-[0_0_25px_5px_#0000003b] rounded-[30px]">
          <div
            ref={btnRef}
            className="absolute top-0 left-0 w-[150px] h-full bg-[rgba(255,170,13,0.2)] rounded-[30px] transition-[0.5s] shadow-[2px_1px_5px_rgba(255,255,255,0.3)]"
          ></div>
          <button
            type="button"
            className="relative px-8 py-3 cursor-pointer bg-transparent border-0 outline-none font-normal text-xl text-main-color-yellow transition-all duration-400 ease-in-out hover:scale-110 hover:font-bold"
            onClick={() => setIsLoginForm(true)}
          >
            登入頁面
          </button>
          <button
            type="button"
            className="relative px-8 py-3 cursor-pointer bg-transparent border-0 outline-none font-normal text-xl text-main-color-yellow transition-all duration-400 ease-in-out hover:scale-110 hover:font-bold"
            onClick={() => setIsLoginForm(false)}
          >
            註冊頁面
          </button>
        </div>

        <form
          onSubmit={handleLogin}
          ref={loginFormRef}
          className="absolute top-[150px] w-[350px] transition-[0.5s] ease-in-out"
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請輸入帳號"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請輸入密碼"
          />
          <div className="flex items-center justify-start my-5 cursor-pointer relative">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-main-color-yellow rounded-[5px] mr-[10px] cursor-pointer relative transition-all duration-300 ease-in-out checked:bg-main-color-yellow checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white checked:after:text-sm hover:border-[rgb(255,200,100)]"
            />
            <span className="text-main-color-yellow text-[17px]">記住帳號</span>
          </div>
          <button
            type="submit"
            className="w-[40%] px-5 py-2.5 mx-auto my-[10%] block text-2xl font-bold text-black bg-main-color-yellow rounded-[30px] border-2 border-transparent shadow-[2px_1px_5px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgb(255,120,0)] hover:text-white hover:border-[rgb(185,107,51)] active:scale-90 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
          >
            登入
          </button>
        </form>

        <form
          id="register"
          ref={registerFormRef}
          className="absolute top-[150px] w-[350px] transition-[0.5s] ease-in-out"
        >
          <input
            type="text"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請填寫帳號"
            required
          />
          <input
            type="number"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請填寫手機號碼"
            required
          />
          <input
            type="email"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請填寫信箱"
            required
          />
          <input
            type="password"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="請填寫密碼"
            required
          />
          <input
            type="password"
            className="w-full py-[15px] px-0 my-[10px] mx-0 rounded-[5px] border border-main-color-yellow text-center outline-none bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] transition-shadow duration-300 ease-in-out focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] focus:border-2 focus:border-main-color-yellow placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] placeholder:text-center"
            placeholder="再次輸入密碼"
            required
          />
          <button
            type="submit"
            className="w-[40%] px-5 py-2.5 mx-auto my-[10%] block text-2xl font-bold text-black bg-main-color-yellow rounded-[30px] border-2 border-transparent shadow-[2px_1px_5px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgb(255,120,0)] hover:text-white hover:border-[rgb(185,107,51)] active:scale-90 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
          >
            註冊
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
