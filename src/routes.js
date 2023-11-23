import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import User from "./components/User";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
]);
