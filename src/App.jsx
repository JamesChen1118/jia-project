import { RouterProvider } from "react-router-dom";
import router from "./router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Booking from "@/pages/Booking";

function App() {
  return (
    <RouterProvider router={router}>
      {" "}
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </RouterProvider>
  );
}

export default App;
