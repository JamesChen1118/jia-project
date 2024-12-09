import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { userApi } from "@/api/module/user";
import { reservationApi } from "@/api/module/reservation";
import ScrollToContent from "@/components/ScrollToContent";
import GoTop from "@/components/GoTop";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { orderApi } from "@/api/module/order";

// 格式化函數
const formatDate = (date) => {
  if (!date) return "-";
  const d = new Date(date);
  return isNaN(d.getTime()) ? "-" : d.toLocaleDateString("zh-TW");
};

const formatAmount = (amount) => {
  return amount ? `NT$ ${amount}` : "NT$ -";
};

const Member = () => {
  const { user } = useAuthStore();
  const [memberTable, setMemberTable] = useState("info");
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (location.state?.activeTab) {
      setMemberTable(location.state.activeTab);
    }

    const fetchOrders = async () => {
      try {
        const response = await orderApi.getOrders();
        console.log("訂單資料:", response);
        setOrders(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("獲取訂單時出錯:", error);
        setOrders([]);
      }
    };

    const fetchReservations = async () => {
      try {
        const response = await reservationApi.getUserReservations();
        setReservations(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("獲取預約時出錯:", error);
        setReservations([]);
      }
    };

    fetchOrders();
    fetchReservations();
  }, [user, navigate, location]);

  const renderReservations = () => {
    if (!reservations || reservations.length === 0) {
      return (
        <tr>
          <td
            colSpan="4"
            className="text-center text-main-color-yellow/70 py-4"
          >
            {t("member.reservation.noRecords")}
          </td>
        </tr>
      );
    }

    return reservations.map((reservation) => (
      <tr key={reservation._id} className="hover:bg-member-hover">
        <td className="p-4 text-main-color-yellow">
          {formatDate(reservation.date)}
        </td>
        <td className="p-4 text-main-color-yellow">{reservation.time}</td>
        <td className="p-4 text-main-color-yellow">{reservation.people}</td>
        <td className="p-4 text-main-color-yellow">{reservation.tableNo}</td>
      </tr>
    ));
  };

  const renderOrders = () => {
    const hasOrders = Array.isArray(orders) && orders.length > 0;
    console.log("Orders data:", orders);

    if (!hasOrders) {
      return (
        <tr>
          <td
            colSpan="3"
            className="text-center text-main-color-yellow/70 py-4"
          >
            尚無訂單記錄
          </td>
        </tr>
      );
    }

    return orders.map((order) => {
      console.log("Single order:", order);
      return (
        <tr key={order._id} className="hover:bg-member-hover">
          <td className="p-4 text-main-color-yellow">
            {order.orderNumber || "-"}
          </td>
          <td className="p-4 text-main-color-yellow">
            {order.date ? formatDate(order.date) : "-"}
          </td>
          <td className="p-4 text-main-color-yellow">
            {order.totalPrice ? formatAmount(order.totalPrice) : "NT$ -"}
          </td>
        </tr>
      );
    });
  };

  const renderHistory = () => {
    const hasOrders = Array.isArray(orders) && orders.length > 0;
    console.log("Orders for history:", orders);

    if (!hasOrders) {
      return (
        <tr>
          <td
            colSpan="4"
            className="text-center text-main-color-yellow/70 py-4"
          >
            尚無消費記錄
          </td>
        </tr>
      );
    }

    return orders.flatMap((order) => {
      const items = Array.isArray(order?.orderItems) ? order.orderItems : [];
      console.log("Order items:", items);

      return items.map((item, index) => (
        <tr key={`${order._id}-${index}`} className="hover:bg-member-hover">
          <td className="p-4 text-main-color-yellow">
            {item?.name ? t(`products.items.${item.name}.name`) : "-"}
          </td>
          <td className="p-4 text-main-color-yellow">
            {order?.date ? formatDate(order.date) : "-"}
          </td>
          <td className="p-4 text-main-color-yellow">{item?.numbers || "-"}</td>
          <td className="p-4 text-main-color-yellow">
            {item?.price && item?.numbers
              ? formatAmount(item.price * item.numbers)
              : "NT$ -"}
          </td>
        </tr>
      ));
    });
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
                  {user?.username || "Loading..."}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  {t("member.fields.email")}
                </label>
                <div className="text-main-color-yellow font-bold text-xl">
                  {user?.email || "Loading..."}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-white mb-2">
                  {t("member.fields.phone")}
                </label>
                <div className="text-main-color-yellow font-bold text-xl">
                  {user?.phone || "Loading..."}
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
                  {t("member.order.orderNumber")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.order.date")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.order.amount")}
                </th>
              </tr>
            </thead>
            <tbody>{renderOrders()}</tbody>
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
                  {t("member.order.productName")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.order.date")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.order.quantity")}
                </th>
                <th className="p-4 text-left text-white">
                  {t("member.order.amount")}
                </th>
              </tr>
            </thead>
            <tbody>{renderHistory()}</tbody>
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
