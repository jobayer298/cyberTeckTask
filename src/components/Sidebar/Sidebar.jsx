import React, { useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import down from "../../assets/down.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isItem1Open, setIsItem1Open] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem1 = () => {
    setIsItem1Open(!isItem1Open);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 right-4 text-white p-2 flex gap-3 items-center  "
      >
        <span>Sidebar</span>
        <FaBars />
      </button>
      <div
        className={`fixed md:top-14 top-0 left-0 h-full w-64 lg:w-64 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-[#9398BF]`}
      >
        <div className="h-full  p-4">
          <button
            onClick={toggleSidebar}
            className="absolute lg:hidden top-4 text-white right-4 "
          >
            <FaTimes />
          </button>
          <h2 className="font-medium text-2xl mt-4">Sidebar</h2>
          <ul className="mt-8 flex flex-col gap-3">
            <li
              className={`bg-white p-1 flex justify-between items-center cursor-pointer`}
              onClick={toggleItem1}
            >
              Item 1
              <span>
                <img
                  className={`w-4 transition-transform duration-300 transform ${
                    isItem1Open ? "rotate-180" : ""
                  }`}
                  src={down}
                  alt=""
                />
              </span>
            </li>
            {isItem1Open && (
              <div className="flex flex-row-reverse text-center">
                <ul className="flex flex-col gap-1 w-3/4 ">
                  <li className="bg-[#B8B6B6] p-1 text-center flex justify-center items-center pl-6">
                    Item A
                  </li>
                  <li className="bg-[#B8B6B6] p-1 flex justify-center items-center pl-6">
                    Item B
                  </li>
                </ul>
              </div>
            )}
            <li className="bg-white p-1 flex justify-between items-center">
              Item 2
              <span>
                <img className="w-4" src={down} alt="" />
              </span>
            </li>
            <li className="bg-white p-1 flex justify-between items-center">
              Item 3
              <span>
                <img className="w-4" src={down} alt="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
