import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold flex items-center space-x-16">
          <span>Categories</span>
          <a href="#" className="text-white">Activities Near Me</a>
          <a href="#" className="text-white">Add a Place</a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-white">Start Exploring</a>
          <FaLongArrowAltRight className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
