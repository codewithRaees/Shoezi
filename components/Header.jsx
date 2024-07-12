import React, { useState } from "react";
import logo from "/images/brand_logo.png";
import { Link, NavLink } from "react-router-dom";
import LoginModel from "./LoginModel";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex justify-between items-center shadow-md px-10 h-[72px] main-header">
      <img src={logo} className="max-h-8" alt="logo" />
      <nav id="sidebar" className="flex gap-x-14 font-bold font-Poppins menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-[#D01C28]" : ""
          }
          to={"/home"}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? " text-[#D01C28]" : "")}
          to={"/location"}
        >
          Location
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? " text-[#D01C28]" : "")}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? " text-[#D01C28]" : "")}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </nav>
      <button
        onClick={() => setisOpen(true)}
        className="bg-[#D01C28] px-3 w-[75px] h-[31px] font-Inter text-white"
      >
        login
        <LoginModel isOpen={isOpen} setisOpen={setisOpen} />
      </button>
    </div>
  );
};

export default Header;
