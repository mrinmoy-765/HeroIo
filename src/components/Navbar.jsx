import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-white shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className={isActive("/") ? "border-b-2 border-purple-500" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-aplications"
                className={
                  isActive("/all-aplications")
                    ? "border-b-2 border-purple-500"
                    : ""
                }
              >
                Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installation"
                className={
                  isActive("/installation")
                    ? "border-b-2 border-purple-500"
                    : ""
                }
              >
                Installation
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-0.5">
          <img src={logo} alt="Application Logo" className="h-10  w-10" />
          <a className="text-xl  font-extrabold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Hero.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={isActive("/") ? "border-b-2 border-purple-500" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/all-aplications"
              className={
                isActive("/all-aplications")
                  ? "border-b-2 border-purple-500"
                  : ""
              }
            >
              Apps
            </Link>
          </li>
          <li>
            <Link
              to="/installation"
              className={
                isActive("/installation") ? "border-b-2 border-purple-500" : ""
              }
            >
              Installation
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/mrinmoy-765/"
          className="flex items-center justify-center gap-1.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm px-3 py-1.5 font-semibold"
        >
          <FaGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
