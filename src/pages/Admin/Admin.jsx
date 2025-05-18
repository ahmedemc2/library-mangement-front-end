import React, { useState } from "react";
import UserMenu from "./UserMenu"; // Assure-toi que le chemin est correct

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry" },
    { id: 3, title: "L'Alchimiste", author: "Paulo Coelho" },
  ];

  const reservations = [
    { id: 1, user: "Ahmed", book: "1984", date: "2025-05-17" },
    { id: 2, user: "Sara", book: "Le Petit Prince", date: "2025-05-16" },
  ];

  const users = [
    { id: 1, name: "Ahmed", email: "ahmed@example.com" },
    { id: 2, name: "Sara", email: "sara@example.com" },
  ];

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const renderSection = () => {
    switch (activeSection) {
      case "books":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Gestion des Livres</h2>
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Rechercher par titre ou auteur..."
                className="px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white w-1/2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ajouter Livre
              </button>
            </div>
            <table className="w-full table-auto text-sm text-left">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Titre</th>
                  <th className="p-2">Auteur</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id} className="border-b">
                    <td className="p-2">{book.id}</td>
                    <td className="p-2">{book.title}</td>
                    <td className="p-2">{book.author}</td>
                    <td className="p-2 space-x-2">
                      <button className="text-yellow-500 hover:underline">
                        Modifier
                      </button>
                      <button className="text-red-500 hover:underline">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredBooks.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-400">
                      Aucun livre ne correspond à votre recherche.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case "reservations":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Gestion des Réservations
            </h2>
            <table className="w-full table-auto text-sm text-left">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Utilisateur</th>
                  <th className="p-2">Livre</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res) => (
                  <tr key={res.id} className="border-b">
                    <td className="p-2">{res.id}</td>
                    <td className="p-2">{res.user}</td>
                    <td className="p-2">{res.book}</td>
                    <td className="p-2">{res.date}</td>
                    <td className="p-2">
                      <button className="text-red-500 hover:underline">
                        Annuler
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "users":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Gestion des Utilisateurs
            </h2>
            <table className="w-full table-auto text-sm text-left">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Nom</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-2">{user.id}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">
                      <button className="text-red-500 hover:underline">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="fext-lg">
        Digital<span className="text-blue-200">BOOK</span>
      </h2>
      <div className="flex justify-between items-center m-8">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveSection("books")}
            className={`px-4 py-2 rounded ${
              activeSection === "books" ? "bg-blue-600" : "bg-gray-700"
            }`}>
            Livres
          </button>
          <button
            onClick={() => setActiveSection("reservations")}
            className={`px-4 py-2 rounded ${
              activeSection === "reservations" ? "bg-blue-600" : "bg-gray-700"
            }`}>
            Réservations
          </button>
          <button
            onClick={() => setActiveSection("users")}
            className={`px-4 py-2 rounded ${
              activeSection === "users" ? "bg-blue-600" : "bg-gray-700"
            }`}>
            Utilisateurs
          </button>
        </div>
        <UserMenu />
      </div>
      {renderSection()}
    </div>
  );
};

export default AdminDashboard;
