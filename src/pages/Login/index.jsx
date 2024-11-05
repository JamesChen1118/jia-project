import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { userApi } from "@/api/user.js";
import { setToken, getToken } from "@/utils/auth.js";
import ScrollToContent from "@/components/ScrollToContent";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      message.warning(t("login.messages.empty"));
      return;
    }

    userApi
      .login(username, password)
      .then(({ token }) => {
        setToken(token);
        message.success(t("login.messages.success"));
        navigate("/");
      })
      .catch((err) => {
        message.error(t("login.messages.fail"));
        console.error(err);
      });
  };

  return (
    <>
      <ScrollToContent />
      <div className="mt-[80px] mb-[100px] mx-auto px-4">
        <div
          className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] 
                      h-auto min-h-[500px] mx-auto 
                      bg-[rgba(41,40,40,0.7)] border-2 border-white/20 
                      shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-[20px] 
                      p-4 sm:p-6 rounded-[20px] overflow-hidden"
        >
          {/* 滑動選單 */}
          <div
            className="w-[240px] sm:w-[280px] mx-auto mt-[30px] relative 
                        bg-[rgba(161,167,142,0.2)] shadow-[0_0_25px_5px_#0000003b] 
                        rounded-[30px]"
          >
            <motion.div
              className="absolute top-0 h-full bg-[rgba(255,170,13,0.2)] rounded-[30px] 
                         shadow-[2px_1px_5px_rgba(255,255,255,0.3)]"
              initial={false}
              animate={{
                left: isLoginForm ? "0px" : "120px",
                width: "120px",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <div className="flex">
              <button
                type="button"
                className={`w-[120px] py-2 cursor-pointer bg-transparent border-0 outline-none 
                           text-base sm:text-lg text-main-color-yellow transition-all duration-400 
                           ease-in-out hover:scale-110 ${
                             isLoginForm ? "font-bold" : "font-normal"
                           }`}
                onClick={() => setIsLoginForm(true)}
              >
                {t("login.title")}
              </button>
              <button
                type="button"
                className={`w-[120px] py-2 cursor-pointer bg-transparent border-0 outline-none 
                           text-base sm:text-lg text-main-color-yellow transition-all duration-400 
                           ease-in-out hover:scale-110 ${
                             !isLoginForm ? "font-bold" : "font-normal"
                           }`}
                onClick={() => setIsLoginForm(false)}
              >
                {t("login.register")}
              </button>
            </div>
          </div>

          {/* 表單區域 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLoginForm ? "login" : "register"}
              initial={{ opacity: 0, x: isLoginForm ? 400 : -400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLoginForm ? -400 : 400 }}
              transition={{ duration: 0.5 }}
              className="absolute top-[120px] w-[85%] left-[50%] -translate-x-1/2"
            >
              {isLoginForm ? (
                <form onSubmit={handleLogin}>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder={t("login.username")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                  />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={t("login.password")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                  />
                  <div className="flex items-center justify-start my-5 cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border-2 border-main-color-yellow rounded-[5px] mr-[10px] cursor-pointer relative transition-all duration-300 ease-in-out checked:bg-main-color-yellow checked:after:content-['✓'] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white checked:after:text-sm hover:border-[rgb(255,200,100)]"
                    />
                    <span className="text-main-color-yellow text-[17px]">
                      {t("login.remember")}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-[40%] px-5 py-2.5 mx-auto my-[10%] block text-2xl font-bold text-black bg-main-color-yellow rounded-[30px] border-2 border-transparent shadow-[2px_1px_5px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgb(255,120,0)] hover:text-white hover:border-[rgb(185,107,51)] active:scale-90 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
                  >
                    {t("login.submit")}
                  </button>
                </form>
              ) : (
                <form id="register">
                  <input
                    type="text"
                    placeholder={t("login.register_form.username")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                    required
                  />
                  <input
                    type="number"
                    placeholder={t("login.register_form.phone")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder={t("login.register_form.email")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                    required
                  />
                  <input
                    type="password"
                    placeholder={t("login.register_form.password")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                    required
                  />
                  <input
                    type="password"
                    placeholder={t("login.register_form.confirm_password")}
                    className="w-full py-3 px-4 my-2 rounded-lg 
                             bg-white/20 border border-main-color-yellow
                             text-center text-lg text-main-color-yellow 
                             shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                             outline-none
                             placeholder:text-[rgba(255,170,13,0.7)]
                             placeholder:text-lg
                             focus:border-2 focus:border-main-color-yellow
                             focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                             transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[40%] px-5 py-2.5 mx-auto my-[10%] block text-2xl font-bold text-black bg-main-color-yellow rounded-[30px] border-2 border-transparent shadow-[2px_1px_5px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgb(255,120,0)] hover:text-white hover:border-[rgb(185,107,51)] active:scale-90 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
                  >
                    {t("login.register_submit")}
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Login;
