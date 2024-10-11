// router/index.jsx

import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Booking,
  Contact,
  Login,
  Menu,
  News,
  NotFound,
  Order,
  Reservation,
  ShoppingCart,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Booking",
    element: <Booking />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/Order",
    element: <Order />,
  },
  {
    path: "/Reservation",
    element: <Reservation />,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart />,
  },
]);

export default router;
