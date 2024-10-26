export const setToken = (token) => {
    localStorage.setItem("JIA-Token", token);
};
export const getToken = () => {
    const token = localStorage.getItem("JIA-Token");
    return token || "";
};
export const removeToken = () => {
    localStorage.removeItem("JIA-Token");
};
