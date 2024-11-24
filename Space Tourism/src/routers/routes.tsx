/**
 * Node Modules
 */     
import { createBrowserRouter } from "react-router-dom";

/**
 * Components
 */
import App from "../App";

/**
 * Routes
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
