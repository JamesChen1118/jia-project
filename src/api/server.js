import axios from "axios";

const instance = axios.create({
    baseURL: "/api",
    timeout: 6000,
});

export default instance;
