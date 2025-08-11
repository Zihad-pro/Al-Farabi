import React from "react";
import { Link, NavLink } from "react-router";
import { IoCallSharp } from "react-icons/io5";
const Navber = () => {
  return (
    <div className="bg-gradient-to-r from-[#AFDDFF] via-[#60B5FF] to-[#AFDDFF] shadow-sm ">
      <div className="navbar   container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-sky-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                  to="/Booking"
                >
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "underline v" : "")}
                  to="/Blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                  to="/contact"
                >
                  Contact
                  <IoCallSharp />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img
              className="w-10 bg-white rounded-full"
              src="image/logo.png"
              alt=""
            />{" "}
            <NavLink to="/" className=" md:text-3xl text-xl">
              Al Farabi
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : ""
                }
                to="/Booking"
              >
                My Bookings
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : ""
                }
                to="/Blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline font-bold" : ""
                }
                to="/contact"
              >
                <IoCallSharp />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/contact"
            className="btn p-5 text-white rounded-4xl bg-[#176AE5] hover:bg-blue-400"
          >
            Emergency
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
