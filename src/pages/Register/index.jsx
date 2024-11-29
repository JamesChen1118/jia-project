import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import GoTop from "@/components/GoTop";

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <GoTop />
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 py-20"
        >
          <div
            className="relative w-[90%] max-w-[600px] h-auto min-h-[800px] mx-auto 
                        bg-[rgba(41,40,40,0.7)] border-2 border-white/20 
                        shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-[20px] 
                        p-8 rounded-[20px] overflow-hidden"
          >
            <div className="w-[300px] mx-auto mt-[30px] relative">
              <div className="flex justify-center bg-[rgba(41,40,40,0.9)] rounded-[30px] p-1">
                <button
                  onClick={() => navigate("/login")}
                  className="relative w-[150px] py-3 px-4
                           text-lg text-main-color-yellow/70
                           transition-all duration-300 
                           rounded-[25px]
                           hover:bg-[rgba(255,170,13,0.1)]
                           hover:text-main-color-yellow"
                >
                  {t("login.title")}
                </button>
                <button
                  className="relative w-[150px] py-3 px-4
                           text-xl text-main-color-yellow
                           transition-all duration-300 
                           rounded-[25px]
                           bg-gradient-to-r from-[rgba(255,170,13,0.2)] to-[rgba(255,170,13,0.3)]
                           shadow-[0_2px_4px_rgba(0,0,0,0.1)]
                           font-bold"
                >
                  {t("login.register")}
                </button>
              </div>
            </div>

            <div className="mt-[100px] w-full flex justify-center">
              <form
                id="register"
                className="w-full max-w-[500px] flex flex-col items-center"
              >
                <input
                  type="text"
                  placeholder={t("login.register_form.username")}
                  className="w-full py-4 px-6 my-3 rounded-lg 
                           bg-white/20 border border-main-color-yellow
                           text-center text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                           outline-none placeholder:text-[rgba(255,170,13,0.7)]
                           placeholder:text-xl focus:border-2 
                           focus:border-main-color-yellow
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                           transition-all duration-300"
                  required
                />
                <input
                  type="number"
                  placeholder={t("login.register_form.phone")}
                  className="w-full py-4 px-6 my-3 rounded-lg 
                           bg-white/20 border border-main-color-yellow
                           text-center text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                           outline-none placeholder:text-[rgba(255,170,13,0.7)]
                           placeholder:text-xl focus:border-2 
                           focus:border-main-color-yellow
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                           transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder={t("login.register_form.email")}
                  className="w-full py-4 px-6 my-3 rounded-lg 
                           bg-white/20 border border-main-color-yellow
                           text-center text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                           outline-none placeholder:text-[rgba(255,170,13,0.7)]
                           placeholder:text-xl focus:border-2 
                           focus:border-main-color-yellow
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                           transition-all duration-300"
                  required
                />
                <input
                  type="password"
                  placeholder={t("login.register_form.password")}
                  className="w-full py-4 px-6 my-3 rounded-lg 
                           bg-white/20 border border-main-color-yellow
                           text-center text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                           outline-none placeholder:text-[rgba(255,170,13,0.7)]
                           placeholder:text-xl focus:border-2 
                           focus:border-main-color-yellow
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                           transition-all duration-300"
                  required
                />
                <input
                  type="password"
                  placeholder={t("login.register_form.confirm_password")}
                  className="w-full py-4 px-6 my-3 rounded-lg 
                           bg-white/20 border border-main-color-yellow
                           text-center text-xl text-main-color-yellow 
                           shadow-[-1px_-1px_5px_rgba(255,255,255,0.3)]
                           outline-none placeholder:text-[rgba(255,170,13,0.7)]
                           placeholder:text-xl focus:border-2 
                           focus:border-main-color-yellow
                           focus:shadow-[-1px_-1px_5px_rgba(255,69,0,0.3)]
                           transition-all duration-300"
                  required
                />
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
                  {t("login.register_submit")}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Register;
