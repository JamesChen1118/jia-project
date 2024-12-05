import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { userApi } from "@/api/module/user";
import { reservationApi } from "@/api/module/reservation";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Member = () => {
  const [memberTable, setMemberTable] = useState("info");
  const [userData, setUserData] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = userApi.getCurrentUser();

    if (!currentUser) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [userData, reservationsData] = await Promise.all([
          userApi.getUser(),
          reservationApi.getUserReservations(),
        ]);

        setUserData(userData);
        setReservations(reservationsData);
        console.log("Fetched reservations:", reservationsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "confirmed":
        return "text-green-500";
      case "cancelled":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  const renderReservations = () => {
    if (isLoading) {
      return (
        <tr>
          <td
            colSpan="5"
            className="text-center text-main-color-yellow/70 py-4"
          >
            載入中...
          </td>
        </tr>
      );
    }

    if (!reservations || reservations.length === 0) {
      return (
        <tr>
          <td
            colSpan="5"
            className="text-center text-main-color-yellow/70 py-4"
          >
            {t("member.reservation.noRecords")}
          </td>
        </tr>
      );
    }

    return reservations.map((reservation) => (
      <tr
        key={reservation._id}
        className="border-b border-[rgba(230,149,57,0.2)]"
      >
        <td className="p-4 text-main-color-yellow">
          {new Date(reservation.date).toLocaleDateString()}
        </td>
        <td className="p-4 text-white">{reservation.time}</td>
        <td className="p-4 text-main-color-yellow">
          {t("member.reservation.peopleCount", { count: reservation.people })}
        </td>
        <td className="p-4 text-white">{reservation.tableNo}</td>
        <td className={`p-4 ${getStatusColor(reservation.status)}`}>
          {t(`member.reservation.status.${reservation.status}`)}
        </td>
      </tr>
    ));
  };

  const renderContent = () => {
    const memberInfo = {
      info: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(230,149,57,0.1)] rounded-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  {t("member.fields.name")}
                </label>
                <div className="text-main-color-yellow font-bold text-xl">
                  {userData?.username || "Loading..."}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  {t("member.fields.email")}
                </label>
                <div className="text-main-color-yellow font-bold text-xl">
                  {userData?.email || "Loading..."}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  {t("member.fields.phone")}
                </label>
                <div className="text-main-color-yellow font-bold text-xl">
                  {userData?.phone || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
      orders: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead className="bg-[rgba(230,149,57,0.1)]">
              <tr>
                <th className="p-4 text-left text-white">
                  {t("member.table.orderNumber")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.date")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.amount")}
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.orders?.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-[rgba(230,149,57,0.2)]"
                >
                  <td className="p-4 text-main-color-yellow">
                    {order.orderNumber}
                  </td>
                  <td className="p-4 text-white">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-main-color-yellow">
                    NT$ {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ),
      history: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead className="bg-[rgba(230,149,57,0.1)]">
              <tr>
                <th className="p-4 text-left text-white">
                  {t("member.table.productName")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.date")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.quantity")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.amount")}
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.history?.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-[rgba(230,149,57,0.2)]"
                >
                  <td className="p-4 text-main-color-yellow">
                    {t(`products.items.${item.productName}.name`)}
                  </td>
                  <td className="p-4 text-white">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-main-color-yellow">
                    {item.quantity}
                  </td>
                  <td className="p-4 text-white">NT$ {item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ),
      reservations: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead className="bg-[rgba(230,149,57,0.1)]">
              <tr>
                <th className="p-4 text-left text-white">
                  {t("member.reservation.date")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.reservation.time")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.reservation.people")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.reservation.table")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.table.status")}
                </th>
              </tr>
            </thead>
            <tbody>{renderReservations()}</tbody>
          </table>
        </motion.div>
      ),
    };

    return memberInfo[memberTable] || <div>{t("common.pleaseSelect")}</div>;
  };

  return (
    <>
      <GoTop />
      <ScrollToContent />
      <div className="w-[90%] lg:w-[80%] mx-auto mt-[120px] mb-[150px] flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[250px] bg-[#333] rounded-xl p-6 shadow-custom"
        >
          <h2 className="text-2xl font-bold text-main-color-yellow mb-8 text-center">
            {t("member.title")}
          </h2>
          <ul className="space-y-4">
            {["info", "orders", "history", "reservations"].map((option) => (
              <motion.li
                key={option}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMemberTable(option)}
                className={`py-2 px-4 rounded-lg cursor-pointer 
                           transition-all duration-300
                           ${
                             memberTable === option
                               ? "bg-main-color-yellow text-black font-bold"
                               : "text-white hover:bg-[rgba(230,149,57,0.1)]"
                           }`}
              >
                {t(`member.${option}`)}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-[#333] rounded-xl p-6 shadow-custom"
        >
          <h3 className="text-xl font-bold text-main-color-yellow mb-6">
            {t(`member.${memberTable}`)}
          </h3>
          {renderContent()}
        </motion.div>
      </div>
    </>
  );
};

export default Member;
