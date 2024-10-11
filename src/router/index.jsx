// router/index.jsx

import { createBrowserRouter } from "react-router-dom";
import { Home, Edit } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
