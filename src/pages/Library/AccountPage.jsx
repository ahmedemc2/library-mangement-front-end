import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const AccountPage = () => {
  const [user, setUser] = useState({
    name: "Jessica Chastain",
    email: "jessica@email.com",
    password: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // ici tu peux connecter à une API pour enregistrer les données
    console.log("Infos enregistrées :", user);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-lg mx-auto bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-gray-400 mb-2" />
          <h2 className="text-2xl font-semibold">Mon Compte</h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Nom</label>
            <input
              type="text"
              name="name"
              value={user.name}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={user.password}
              disabled={!editMode}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>

          {editMode ? (
            <div className="flex gap-4 justify-end mt-6">
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition">
                Annuler
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
                Enregistrer
              </button>
            </div>
          ) : (
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
                Modifier mes infos
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
