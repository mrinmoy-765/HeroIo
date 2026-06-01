import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="navbar-start">
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
            <a>Home</a>
          </li>
          <li>
            <a>Apps</a>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to=""
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
