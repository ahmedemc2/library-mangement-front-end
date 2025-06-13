import React, { useState } from "react";
import { FaTimes, FaBell, FaPlus, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../store/userSlice";
import { setSearchBook } from "../../store/searchSlice";

const reservedBooks = [
  { id: 1, title: "Read Freely", author: "Fatima Souad" },
  { id: 2, title: "Embrace The Wild", author: "Rana Anderson" },
];

const notifications = [
  { id: 1, message: "Nouvelle réservation ajoutée.", date: "Il y a 2 minutes" },
  {
    id: 2,
    message: "Un livre est maintenant disponible.",
    date: "Il y a 10 minutes",
  },
  { id: 3, message: "Votre profil a été mis à jour.", date: "Hier" },
];

const Header = ({}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();
  const searchBook = useSelector((state) => state.searchBook.searchBook);

  const handleChange = (searchedBook) => {
    dispatch(setSearchBook(searchedBook));
  };

  console.log(searchBook);

  const [showReservations, setShowReservations] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleReservations = () => {
    setShowReservations(!showReservations);
    setShowNotifications(false);
    setShowUserMenu(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowReservations(false);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
    setShowReservations(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed flex top-0 justify-between items-center py-4 px-6 text-white w-[80%] right-0 z-30 bg-[#1E1E2F]">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#2c2c3d] text-white px-4 py-2 rounded w-1/4 outline-none"
        onChange={(e) => handleChange(e.target.value)}
        value={searchBook}
      />
      <div className="flex gap-5">
        <Link to="/app/books">Books</Link>
        <Link to="/app/author">Authors</Link>
        <Link to="/app/noti">Notification</Link>
        <Link to="/app/noti">Réservation</Link>
      </div>
      <div>
        <div className="flex items-center gap-4">
          {/* Icône de notifications */}
          <button
            onClick={toggleNotifications}
            className="relative p-2 text-white rounded-full hover:bg-white/10 transition"
            title="Notifications"
          >
            <FaBell className="text-xl" />
            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full animate-ping"></span>
          </button>

          {/* Icône + pour réservations */}
          <button
            onClick={toggleReservations}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            title="Réservations"
          >
            <FaPlus />
          </button>

          {/* Icône utilisateur */}
          <button
            onClick={toggleUserMenu}
            className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-full transition"
            title="Compte utilisateur"
          >
            <FaUserCircle className="text-2xl" />
            {/* <span className="hidden md:inline">{user.name}</span> */}
          </button>
        </div>
        {/* CARD: Notifications */}

        {showNotifications && (
          <div className="absolute right-0 top-20 w-80 bg-gray-800 bg-opacity-80 text-white shadow-lg rounded-lg p-4 z-50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Notifications Récentes</h3>
              <button
                className="text-red-400 hover:text-red-600 transition-colors duration-300 p-1 rounded-full hover:bg-red-100/20"
                onClick={() => setShowNotifications(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-3">
              {notifications.map((notif) => (
                <li key={notif.id} className="border-b border-gray-600 pb-2">
                  <p className="text-sm">{notif.message}</p>
                  <span className="text-xs text-gray-400">{notif.date}</span>
                </li>
              ))}
            </ul>
            <button
              className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-sm"
              onClick={() => navigate("/app/noti")}
            >
              DITAILS
            </button>
          </div>
        )}

        {/* CARD: Réservations */}

        {showReservations && (
          <div className="absolute right-0 top-20 w-80 bg-gray-800 bg-opacity-80 text-white shadow-lg rounded-lg p-4 z-50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Livres Réservés</h3>
              <button
                className="text-red-400 hover:text-red-600 transition-colors duration-300 p-1 rounded-full hover:bg-red-100/20"
                onClick={() => setShowReservations(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-2">
              {reservedBooks.map((book) => (
                <li key={book.id} className="border-b border-gray-600 pb-2">
                  <p className="font-medium text-white">{book.title}</p>
                  <p className="text-sm text-gray-300">par {book.author}</p>
                </li>
              ))}
            </ul>
            <button
              className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-sm"
              onClick={() => navigate("/app/res")}
            >
              DETAILS
            </button>
          </div>
        )}

        {/* CARD: Menu utilisateur */}
        {showUserMenu && (
          <div className="absolute right-0 top-20 w-64 bg-gray-800 bg-opacity-80 text-white shadow-lg rounded-lg p-4 z-50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Mon Compte</h3>
              <button
                className="text-red-400 hover:text-red-600 transition-colors duration-300 p-1 rounded-full hover:bg-red-100/20"
                onClick={() => setShowUserMenu(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mb-4">
              <FaUserCircle className="text-4xl mx-auto mb-2 text-gray-300" />
              {/* <p className="font-medium">{user.name}</p> */}
              {/* <p className="text-sm text-gray-400">{user.email}</p> */}
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                onClick={() => navigate("/app/account")}
              >
                Voir mon compte
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition duration-300"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
