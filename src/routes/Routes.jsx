import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
