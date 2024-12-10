import Swal from "sweetalert2";
import "animate.css";

// 基本配置
const baseConfig = {
  background: "#333",
  color: "#E69539",
  confirmButtonColor: "#E69539",
  cancelButtonColor: "#666",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
  customClass: {
    title: "text-main-color-yellow text-xl",
    htmlContainer: "text-main-color-yellow",
    popup: "custom-popup-class",
    confirmButton: "custom-confirm-button",
    cancelButton: "custom-cancel-button",
  },
};

// 不同類型的彈窗
export const Popup = {
  // 確認框
  confirm: async (options) => {
    return Swal.fire({
      ...baseConfig,
      ...options,
      showCancelButton: true,
    });
  },

  // 成功提示
  success: (options) => {
    return Swal.fire({
      ...baseConfig,
      icon: "success",
      ...options,
    });
  },

  // 錯誤提示
  error: (options) => {
    return Swal.fire({
      ...baseConfig,
      icon: "error",
      ...options,
    });
  },

  // 警告提示
  warning: (options) => {
    return Swal.fire({
      ...baseConfig,
      icon: "warning",
      ...options,
    });
  },

  // 登入提示
  requireLogin: (options) => {
    return Swal.fire({
      ...baseConfig,
      icon: "info",
      showCancelButton: true,
      ...options,
    });
  },

  // Toast 提示 (用於購物車等快速提示)
  toast: (options) => {
    return Swal.fire({
      toast: true,
      position: "top",
      timer: 1500,
      showConfirmButton: false,
      background: "#333",
      color: "#ffc107",
      iconColor: "#ffc107",
      ...options,
    });
  },

  // 登入相關提示
  login: {
    success: (t) => {
      return Swal.fire({
        ...baseConfig,
        title: t("login.messages.success"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      });
    },
    fail: (t, error) => {
      return Swal.fire({
        ...baseConfig,
        title: t("login.messages.fail"),
        text: error?.message || t("login.messages.error"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    },
    required: (t) => {
      return Swal.fire({
        ...baseConfig,
        title: t("login.required"),
        text: t("login.reservation_hint"),
        icon: "info",
        confirmButtonText: t("login.submit"),
        showCancelButton: true,
        cancelButtonText: t("common.cancel"),
      });
    },
  },

  // 註冊相關提示
  register: {
    success: (t) => {
      return Swal.fire({
        ...baseConfig,
        title: t("register.success"),
        text: t("register.welcome"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      });
    },
    fail: (t, error) => {
      return Swal.fire({
        ...baseConfig,
        title: t("register.fail"),
        text: error?.message || t("register.error"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    },
    validation: (t, message) => {
      return Swal.fire({
        ...baseConfig,
        title: t("common.warning"),
        text: message,
        icon: "warning",
        confirmButtonText: t("common.confirm"),
      });
    },
  },

  // 訂位相關提示
  reservation: {
    success: (t) => {
      return Swal.fire({
        ...baseConfig,
        title: t("reservation.success"),
        text: t("reservation.success_message"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      });
    },
    fail: (t, error) => {
      return Swal.fire({
        ...baseConfig,
        title: t("reservation.fail"),
        text: error?.message || t("reservation.error_message"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    },
  },

  // 購物車相關提示
  cart: {
    success: (t) => {
      return Swal.fire({
        ...baseConfig,
        title: t("cart.success"),
        icon: "success",
        confirmButtonText: t("common.confirm"),
      });
    },
    fail: (t, error) => {
      return Swal.fire({
        ...baseConfig,
        title: t("cart.fail"),
        text: error?.message || t("cart.error"),
        icon: "error",
        confirmButtonText: t("common.confirm"),
      });
    },
  },
};

export default Popup;
