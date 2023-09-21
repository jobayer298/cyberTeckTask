import React, { useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import down from "../../assets/down.png";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemStates, setItemStates] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (itemId) => {
    setItemStates((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
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
              onClick={() => toggleItem("item1")}
            >
              Item 1
              <span>
                <img
                  className={`w-4 transition-transform duration-300 transform ${
                    itemStates.item1 ? "rotate-180" : ""
                  }`}
                  src={down}
                  alt=""
                />
              </span>
            </li>
            {itemStates.item1 && (
              <Dropdown menu1={"Item A"} menu2={"Item B"}></Dropdown>
            )}
            <li
              className={`bg-white p-1 flex justify-between items-center cursor-pointer`}
              onClick={() => toggleItem("item2")}
            >
              Item 2
              <span>
                <img
                  className={`w-4 transition-transform duration-300 transform ${
                    itemStates.item2 ? "rotate-180" : ""
                  }`}
                  src={down}
                  alt=""
                />
              </span>
            </li>
            {itemStates.item2 && (
              <Dropdown menu1={"Item C"} menu2={"Item D"}></Dropdown>
            )}
            <li
              className={`bg-white p-1 flex justify-between items-center cursor-pointer`}
              onClick={() => toggleItem("item3")}
            >
              Item 3
              <span>
                <img
                  className={`w-4 transition-transform duration-300 transform ${
                    itemStates.item3 ? "rotate-180" : ""
                  }`}
                  src={down}
                  alt=""
                />
              </span>
            </li>
            {itemStates.item3 && (
              <Dropdown menu1={"Item E"} menu2={"Item F"}></Dropdown>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
