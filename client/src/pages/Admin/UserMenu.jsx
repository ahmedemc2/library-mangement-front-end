import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/userSlice";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout);
    navigate("/");
  };

  return (
    <div className="relative text-right">
      <button
        className="flex items-center space-x-2"
        onClick={() => setOpen(!open)}
      >
        <FaUserCircle className="text-2xl text-white" />
        <span className="text-white font-medium">{user.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold">Mon Compte</h3>
            <IoMdClose
              className="text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="text-center">
            <FaUserCircle className="mx-auto text-4xl text-gray-400 mb-2" />
            <p className="text-white font-semibold">{user.name}</p>
            <p className="text-gray-400 text-sm mb-4">{user.email}</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-2">
              Voir mon compte
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
