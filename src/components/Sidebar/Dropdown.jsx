import React from 'react';

const Dropdown = ({menu1, menu2}) => {
    return (
      <div className="flex flex-row-reverse text-center">
        <ul className="flex flex-col gap-1 w-3/4 ">
          <li className="bg-[#B8B6B6] p-1 text-center flex justify-center items-center pl-6">
            {menu1}
          </li>
          <li className="bg-[#B8B6B6] p-1 flex justify-center items-center pl-6">
           {menu2}
          </li>
        </ul>
      </div>
    );
};

export default Dropdown;