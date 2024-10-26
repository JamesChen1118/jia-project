import Layout from "@/components/Layout";
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
  Member,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />,
      },
      {
        path: "/member",
        element: <Member />,
      },
    ],
  },
]);

export default router;
