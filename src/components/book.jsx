import book1 from "../assets/images/cover.jpg";

import { useState } from "react";

const Book = ({ id, title, author, price, image = book1, badge }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div key={id} className="flex flex-col items-center text-center relative">
      <div className="relative w-full group rounded-md overflow-hidden">
        <img
          src={image}
          alt={`Cover of ${title}`}
          className="h-[300px] w-full object-cover rounded-md shadow-md"
        />

        {badge && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm uppercase">
            {badge}
          </span>
        )}

        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded-md z-10"></div>

        {/* Bouton Détails */}
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 z-20"
          onClick={() => setShowDetails(true)}
        >
          Détails
        </button>
      </div>

      <p className="text-green-500 font-semibold mt-3">{price}</p>
      <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">by {author}</p>

      {/* Modal / Fiche d'information */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-red-500 font-bold text-lg"
              onClick={() => setShowDetails(false)}
            >
              &times;
            </button>
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-700">Auteur : {author}</p>
            <p className="text-green-600 font-semibold">Prix : {price}</p>
            <div className="mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => alert(`Réservation du livre ${title}`)}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
