import React, { useState } from "react";
import { FaBell, FaPlus, FaUserCircle } from "react-icons/fa";

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

const Header = () => {
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

  return (
    <header className="relative flex justify-between items-center py-6 text-white">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#2c2c3d] text-white px-4 py-2 rounded w-1/2 outline-none"
      />

      <div className="flex items-center gap-4">
        {/* Icône de notifications */}
        <button
          onClick={toggleNotifications}
          className="relative p-2 text-white rounded-full hover:bg-white/10 transition"
          title="Notifications">
          <FaBell className="text-xl" />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full animate-ping"></span>
        </button>

        {/* Icône + pour réservations */}
        <button
          onClick={toggleReservations}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
          title="Réservations">
          <FaPlus />
        </button>

        {/* Icône utilisateur */}
        <button
          onClick={toggleUserMenu}
          className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-full transition"
          title="Compte utilisateur">
          <FaUserCircle className="text-2xl" />
          <span className="hidden md:inline">Jessica Chastain</span>
        </button>
      </div>

      {/* CARD: Notifications */}
      {showNotifications && (
        <div className="absolute right-0 top-20 w-80 bg-white text-gray-800 shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Notifications Récentes</h3>
            <button
              className="text-red-500 font-bold"
              onClick={() => setShowNotifications(false)}>
              ❌
            </button>
          </div>
          <ul className="space-y-3">
            {notifications.map((notif) => (
              <li key={notif.id} className="border-b pb-2">
                <p className="text-sm">{notif.message}</p>
                <span className="text-xs text-gray-500">{notif.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CARD: Réservations */}
      {showReservations && (
        <div className="absolute right-0 top-20 w-80 bg-white text-gray-800 shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Livres Réservés</h3>
            <button
              className="text-red-500 font-bold"
              onClick={() => setShowReservations(false)}>
              ❌
            </button>
          </div>
          <ul className="space-y-2">
            {reservedBooks.map((book) => (
              <li key={book.id} className="border-b pb-2">
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-gray-600">par {book.author}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CARD: Menu utilisateur */}
      {showUserMenu && (
        <div className="absolute right-0 top-20 w-64 bg-white text-gray-800 shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Mon Compte</h3>
            <button
              className="text-red-500 font-bold"
              onClick={() => setShowUserMenu(false)}>
              ❌
            </button>
          </div>
          <div className="text-center mb-4">
            <FaUserCircle className="text-4xl mx-auto mb-2 text-gray-600" />
            <p className="font-medium">Jessica Chastain</p>
            <p className="text-sm text-gray-500">jessica@email.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Voir mon compte
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
