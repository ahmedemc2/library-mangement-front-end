import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const CustomButton = ({ text = "", style = "" }) => {
  return (
    <button
      className={`px-4 py-1 rounded-md border transition duration-300 ${
        style
          ? style
          : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      }`}>
      {text}
    </button>
  );
};

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md text-white px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h3 className="text-blue-500 font-bold text-2xl">DigitalBook</h3>

        {/* Navigation Links Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="hover:text-blue-500 cursor-pointer transition">
            Books
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Authors
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Categories
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Buttons Desktop */}
        <div className="hidden md:flex gap-3">
          <CustomButton text="Login" />
          <CustomButton
            text="Register"
            style="bg-blue-600 text-white hover:bg-blue-700"
          />
        </div>

        {/* Hamburger Icon Mobile */}
        <div className="md:hidden">
          <IoMenu
            className="text-3xl cursor-pointer hover:text-blue-500"
            onClick={() => setExpand(!expand)}
          />
        </div>
      </div>

      {/* Dropdown Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          expand ? "max-h-64 pt-4" : "max-h-0"
        }`}>
        <ul className="flex flex-col items-center gap-3 text-sm font-medium mb-4">
          <li className="hover:text-blue-500 cursor-pointer">Books</li>
          <li className="hover:text-blue-500 cursor-pointer">Authors</li>
          <li className="hover:text-blue-500 cursor-pointer">Categories</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
        <div className="flex justify-center gap-3">
          <CustomButton text="Login" />
          <CustomButton
            text="Register"
            style="bg-blue-600 text-white hover:bg-blue-700"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
