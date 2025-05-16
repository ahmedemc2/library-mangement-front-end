import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ReservationsPage = () => {
  const [reservedBooks, setReservedBooks] = useState([
    { id: 1, title: "1984", available: true },
    { id: 2, title: "Le Petit Prince", available: false },
    { id: 3, title: "L'Alchimiste", available: true },
  ]);

  const handleRemoveReservation = (id) => {
    setReservedBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Mes Réservations</h2>

        {reservedBooks.length === 0 ? (
          <p className="text-gray-400">Aucune réservation en cours.</p>
        ) : (
          <ul className="space-y-4">
            {reservedBooks.map((book) => (
              <li
                key={book.id}
                className="flex justify-between items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                <div>
                  <p className="font-medium text-lg">{book.title}</p>
                  <p
                    className={`text-sm ${
                      book.available ? "text-green-400" : "text-red-400"
                    }`}>
                    {book.available ? "Disponible" : "Indisponible"}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveReservation(book.id)}
                  className="text-red-400 hover:text-red-600 transition"
                  title="Supprimer">
                  <FaTimes className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReservationsPage;
