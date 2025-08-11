import React from "react";
import Navber from "../../Components/Navber/Navber";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="">
      <Navber />
      <div className="bg-gray-100 min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
