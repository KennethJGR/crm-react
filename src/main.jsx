import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NewClient,{action as newClientAction} from "./pages/NewClient";
import Index, { loader as clientLoader } from "./pages/Index";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: newClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
