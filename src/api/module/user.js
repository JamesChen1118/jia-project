import axios from "axios";

export const userApi = {
    login: async (username, password) => {
        const { data } = await axios.post("https://dummyjson.com/auth/login", {
            username,
            password,
        });
        return data;
    },
};
