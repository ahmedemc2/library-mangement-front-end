import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const CustomButton = ({ text = "", style = null }) => {
  return (
    <button
      className={`${
        style ? style : " text-blue-600"
      } border-1 px-4 py-1 border-blue-600 rounded-sm`}
    >
      {text}
    </button>
  );
};

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="bg-[rgba(33,37,41,0.95)] text-white px-10 py-3 fixed top-0 w-screen z-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="text-blue-600 font-semibold text-2xl">DigitalBook</h3>
        </div>
        <ul className="hidden md:flex w-fit gap-8 justify-between">
          <li>Books</li>
          <li>Authors</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
        <div className="md:flex gap-3 hidden">
          <CustomButton text="LogIn" />
          <CustomButton text="Register" style="bg-blue-600" />
        </div>
        <span
          onClick={() => setExpand((prev) => !prev)}
          className="md:hidden cursor-pointer"
        >
          <IoMenu className="text-3xl " />
        </span>
      </div>

      <div
        className={`md:hidden flex flex-col items-center gap-3 overflow-hidden transition-all delay-75 duration-700 ease-in-out ${
          expand ? "h-48 opacity-100 py-3" : "h-0 opacity-0 py-0"
        } `}
      >
        <ul className="flex flex-col gap-3 items-center">
          <li>Books</li>
          <li>Authors</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-3">
          <CustomButton text="LogIn" />
          <CustomButton text="Register" style="bg-blue-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
