import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Votre réservation de '1984' est confirmée.",
      date: "16 mai 2025",
    },
    {
      id: 2,
      message: "Le livre 'Le Petit Prince' est de nouveau disponible.",
      date: "15 mai 2025",
    },
    { id: 3, message: "Nouvel ajout : 'L'Alchimiste'", date: "14 mai 2025" },
  ]);

  const handleRemoveNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="min-h-screen  text-white py-10 px-6">
      <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">
          🔔 Notifications Récentes
        </h2>

        {notifications.length === 0 ? (
          <p className="text-gray-400">Aucune notification pour le moment.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex justify-between items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                <div>
                  <p className="text-sm mb-1">{notif.message}</p>
                  <span className="text-xs text-gray-400">{notif.date}</span>
                </div>
                <button
                  onClick={() => handleRemoveNotification(notif.id)}
                  className="text-red-400 hover:text-red-600 transition"
                  title="Supprimer">
                  <FaTimes className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
