"use client";

import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      >
        <span
          className={`h-1 bg-white rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 bg-white rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 bg-white rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 space-y-2 w-40">
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Services
          </a>
          <a href="#" className="block text-gray-800 hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
