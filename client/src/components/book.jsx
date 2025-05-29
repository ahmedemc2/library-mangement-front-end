import book1 from "../assets/images/cover.jpg";

import { useState } from "react";

const Book = ({ id, title, author, price, image = book1, badge, status }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      key={id}
      className="flex flex-col items-center text-center relative w-[201px] "
    >
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

      <p className="text-green-500 font-semibold mt-3">{price} MAD</p>
      <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">by {author.name}</p>

      {/* Modal / Fiche d'information */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/30 backdrop-blur-3xl rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-4 z-10 text-red-500 font-bold text-4xl cursor-pointer"
              onClick={() => setShowDetails(false)}
            >
              &times;
            </button>
            <div className="flex justify-center relative ">
              <span
                className={`${
                  status === "BORROWED"
                    ? "bg-amber-300 text-gray-600"
                    : "bg-green-500 text-white"
                } p-1 px-2 rounded-2xl text-sm font-bold absolute top-3 right-26`}
              >
                {status}
              </span>
              <img
                src={image}
                alt={title}
                className="h-[350px] w-[55%] object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-900">Auteur : {author.name}</p>
            <p className="text-green-400 font-semibold">Prix : {price}</p>
            <div className="mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleReserveBook}
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
