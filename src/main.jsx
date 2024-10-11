import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Booking from "@/pages/Booking";
import App from "./App.jsx";
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
