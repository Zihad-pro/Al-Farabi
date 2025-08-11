import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-[#AFDDFF] via-[#60B5FF] to-[#AFDDFF] text-base-content rounded p-10">
      <div className="flex gap-2 items-center ">
        <img className="w-10 bg-white rounded-full" src="image/logo.png" alt="" />{" "}
        <NavLink to="/" className="text-2xl">Al Farabi</NavLink>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
          to="/Booking"
        >
          My Bookings
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "underline v" : "")}
          to="/Blogs"
        >
          Blogs
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <nav className="border-t-1 border-dashed py-5 w-6/12 ">
        <div className="grid grid-flow-col gap-4  ">
          <a href="https://www.facebook.com/">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.youtube.com/">
            <IoLogoYoutube size={28} />
          </a>

          <a href="https://www.twitter.com/">
            <BsTwitterX size={28} />
          </a>
          <a href="https://www.linkdin.com/">
            <FaLinkedin size={28} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
