import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { userApi } from "@/api/module/user.js";
import { useAuthStore } from "@/store/auth";
import ScrollToContent from "@/components/ScrollToContent";
import Swal from "sweetalert2";
import GoTop from "@/components/GoTop";
import { setToken } from "@/utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      Swal.fire({
        title: t("login.messages.empty"),
        icon: "warning",
        confirmButtonText: t("common.confirm"),
      });
      return;
    }

    try {
      const data = await userApi.login(username, password);
      setToken(data.token);
      login(data.token, data);

      await Swal.fire({
        title: t("login.messages.success"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      });

      const intendedRoute = localStorage.getItem("intendedRoute");
      if (intendedRoute) {
        localStorage.removeItem("intendedRoute");
        navigate(intendedRoute);
      } else {
        navigate("/member");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: t("login.messages.fail"),
        text: error.message,
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    }
  };

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 py-20"
        >
          <div
            className="relative w-[90%] max-w-[600px] h-auto min-h-[600px] mx-auto 
                        bg-[rgba(41,40,40,0.7)] border-2 border-white/20 
                        shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-[20px] 
                        p-8 rounded-[20px] overflow-hidden"
          >
            <div className="w-[300px] mx-auto mt-[30px] relative">
              <div className="flex justify-center bg-[rgba(41,40,40,0.9)] rounded-[30px] p-1">
                <button
                  className="relative w-[150px] py-3 px-4
                           text-xl text-main-color-yellow
                           transition-all duration-300 
                           rounded-[25px]
                           bg-gradient-to-r from-[rgba(255,170,13,0.2)] to-[rgba(255,170,13,0.3)]
                           shadow-[0_2px_4px_rgba(0,0,0,0.1)]
                           font-bold"
                >
                  {t("login.title")}
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="relative w-[150px] py-3 px-4
                           text-lg text-main-color-yellow/70
                           transition-all duration-300 
                           rounded-[25px]
                           hover:bg-[rgba(255,170,13,0.1)]
                           hover:text-main-color-yellow"
                >
                  {t("login.register")}
                </button>
              </div>
            </div>

            <div className="absolute top-[150px] w-full left-0 px-8">
              <form
                onSubmit={handleLogin}
                className="flex flex-col items-center w-full"
              >
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder={t("login.username")}
                  className="w-full max-w-[500px] py-4 px-6 my-3 rounded-lg 
                           border border-main-color-yellow text-center outline-none 
                           bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] 
                           transition-shadow duration-300 ease-in-out 
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] 
                           focus:border-2 focus:border-main-color-yellow 
                           placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] 
                           placeholder:text-center"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder={t("login.password")}
                  className="w-full max-w-[500px] py-4 px-6 my-3 rounded-lg 
                           border border-main-color-yellow text-center outline-none 
                           bg-[rgba(255,255,255,0.2)] text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.9)] 
                           transition-shadow duration-300 ease-in-out 
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.5)] 
                           focus:border-2 focus:border-main-color-yellow 
                           placeholder:text-xl placeholder:text-[rgba(255,170,13,0.7)] 
                           placeholder:text-center"
                />
                <div className="flex items-center justify-center w-full max-w-[500px] my-5">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-main-color-yellow 
                             rounded-[5px] mr-[10px] cursor-pointer relative 
                             transition-all duration-300 ease-in-out 
                             checked:bg-main-color-yellow 
                             checked:after:content-['✓'] checked:after:absolute 
                             checked:after:top-1/2 checked:after:left-1/2 
                             checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 
                             checked:after:text-white checked:after:text-sm 
                             hover:border-[rgb(255,200,100)]"
                  />
                  <span className="text-main-color-yellow text-xl">
                    {t("login.remember")}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-[200px] px-8 py-4 mt-8 text-2xl 
                           font-bold text-black bg-main-color-yellow rounded-[30px] 
                           border-2 border-transparent 
                           shadow-[2px_1px_5px_rgba(255,255,255,0.3)] 
                           transition-all duration-300 ease-in-out 
                           hover:bg-[rgb(255,120,0)] hover:text-white 
                           hover:border-[rgb(185,107,51)] active:scale-90 
                           active:shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
                >
                  {t("login.submit")}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
