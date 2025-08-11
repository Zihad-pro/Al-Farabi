import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import VewDetailes from "../Components/VewDetailes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("../doctorsData.json"),
        path: "/",
        Component: Home,
        hydrateFallbackElement: (
          <div className="text-center">
            {" "}
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
      },
      {
        path: "/Booking",
        Component: Booking,
        
      },
      {
        path: "/Blogs",
        Component: Blogs,
      },
      {
        path: "/Contact",
        Component: Contact,
      },
      {
        path: "/veiwDetalils/:id",
        Component: VewDetailes,
        loader: () => fetch("../doctorsData.json"),
        hydrateFallbackElement: (
          <div className="text-center">
            {" "}
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
      },
    ],
  },
]);
