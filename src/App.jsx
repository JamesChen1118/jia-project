import { RouterProvider } from "react-router-dom";
import router from "./router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Booking from "@/pages/Booking";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
