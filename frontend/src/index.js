import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Aboult from "./pages/aboult";
import Home from "./pages/home";
import ErrorPage from "./pages/errorPage";
import { Articles } from "./pages/articles";
import Search from "./pages/search";
import PlantDeatails from "./pages/plantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboult",
        element: <Aboult />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "search/:id",
        element: <PlantDeatails />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
