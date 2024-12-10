import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Reservation from "./pages/Reservation";
import ShoppingCart from "./pages/ShoppingCart";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "booking",
                element: <Booking />,
            },
            {
                path: "member",
                element: <Member />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "reservation",
                element: <Reservation />,
            },
            {
                path: "cart",
                element: <ShoppingCart />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
];

export default routes; 