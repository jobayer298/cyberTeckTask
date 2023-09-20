import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* <div className="text-white font-semibold text-xl">Logo</div> */}
        <div className="md:hidden flex justify-start items-center">
          <h2 className="text-white mr-3 font-medium ">Menu</h2>
          <button onClick={toggleNavbar} className="text-white">
            <FaBars />
          </button>
        </div>
        <ul className="hidden md:flex text-white justify-center w-full space-x-4">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed top-0 right-0 h-screen z-50 w-1/2 bg-[#ADADAD] text-black transition-transform ease-in-out duration-300 transform`}
      >
        <button onClick={toggleNavbar} className="absolute top-4 right-4 ">
          <FaTimes />
        </button>
        <ul className="flex z-50 flex-col h-full text-black font-medium mt-24 items-center space-y-7">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
