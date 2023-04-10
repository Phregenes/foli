import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Aboult from "./pages/aboult";
import Home from "./pages/home";
import ErrorPage from "./pages/errorPage";
import { Articles } from "./pages/articles";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "Aboult",
//     element: <Aboult />
//   }
// ])

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
