import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>HOmeee</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "orders",
        element: <div>Ordersss</div>,
      },
    ],
  },
]);

export default router;
