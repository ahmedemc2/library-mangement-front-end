import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text = "", style = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-md border-2 border-blue-700 transition duration-300 cursor-pointer font-semibold ${style}`}>
      {text}
    </button>
  );
};

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md text-white px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h3 className="text-500 font-bold text-2xl">
          Digital<span className="text-blue-500">Book</span>
        </h3>

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
          <CustomButton
            text="Login"
            style="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            onClick={() => navigate("/login")}
          />
          <CustomButton
            text="Register"
            style="bg-blue-700 text-white hover:bg-blue-900"
            onClick={() => navigate("/register")}
          />
        </div>

        {/* Menu Mobile */}
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
          <CustomButton
            text="Login"
            style="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
            onClick={() => {
              navigate("/login");
              setExpand(false);
            }}
          />
          <CustomButton
            text="Register"
            style="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              navigate("/register");
              setExpand(false);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
