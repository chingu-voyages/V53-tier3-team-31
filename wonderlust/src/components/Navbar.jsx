"use client";

import { FaSun } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-blue-500 py-4 px-8 flex justify-between items-center text-white relative shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Navbar Title */}
      <h1 className="text-2xl font-bold cursor-pointer hover:underline hover:text-blue-300 transition-colors duration-300">
        Wanderlust
      </h1>

      {/* Mobile Menu Toggle */}
      <div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none md:hidden transition-transform duration-300 hover:scale-110"
        >
          ☰
        </button>

        {/* Dropdown Menu for Smaller Screens */}
        {isMenuOpen && (
          <div className="absolute right-8 top-16 bg-white text-black w-48 rounded-lg shadow-lg border border-gray-200 transition-opacity duration-300">
            <div className="p-4 border-b border-gray-300 text-center font-semibold hover:bg-gray-100">
              John Doe
            </div>
            <button className="w-full border-b border-gray-300 p-4 text-left hover:bg-gray-100 transition-colors duration-300">
              Logout
            </button>
            <div className="flex items-center justify-start p-4 hover:bg-gray-100 transition-colors duration-300">
              <FaSun className="text-lg text-black mr-2" />
              Dark Theme
            </div>
          </div>
        )}
      </div>

      <nav className="hidden md:flex items-center">
        <FaSun className="text-white text-lg cursor-pointer mr-6 transition-transform duration-300 hover:scale-125 hover:text-black" />
        <div className="mr-4 cursor-pointer ">John Doe</div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded shadow transition-transform duration-300 hover:bg-gray-100 hover:scale-105">
          Logout
        </button>
      </nav>
    </header>
  );
}
