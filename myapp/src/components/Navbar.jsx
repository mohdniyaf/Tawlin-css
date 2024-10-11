import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaLinesLeaning } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full sticky flex justify-between items-center h-24 mx-auto px-4">
      
      <h1 className="flex items-center text-2xl font-bold pl-14">
        <span className="text-black">Travel</span>
        <span className="text-orange-400">Toor</span>
      </h1>
      
      <ul className='flex items-center gap-16 font-medium text-neutral-800 font'>
        <li>Home</li>
        <li>About</li>
        <li>Package</li>
        <li>Contact</li>
        <li><FaSearch /></li>
      </ul>

      <div className="flex items-center mr-14">
        <FaLinesLeaning className="text-2xl transform rotate-90" />
      </div>

    </div>
  );
}

export default Navbar;
