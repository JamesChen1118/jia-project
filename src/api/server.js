import axios from "axios";

const server = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default server;
