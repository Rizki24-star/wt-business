import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav flex justify-between items-center w-full text-white">
      <Link to="/" className="brand">
        WT Bussiness
      </Link>
      <div className="user flex items-center gap-2 ">
        <img
          src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1"
          alt="user-profile"
        />
        <span className="hidden md:block">Rizki Okto S</span>
      </div>
    </nav>
  );
};

export default Navbar;
