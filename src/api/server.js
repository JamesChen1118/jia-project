import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:5173",
    timeout: 6000
});

export default server;
