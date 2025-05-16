const Book = ({ id, title, author, price, image, badge }) => {
  return (
    <div key={id} className="flex flex-col items-center text-center relative">
      <div className="relative w-full group rounded-md overflow-hidden">
        <img
          src={image}
          alt={`Cover of ${title}`}
          className="h-[300px] w-full object-cover rounded-md shadow-md"
        />

        {/* Badge en haut à gauche */}
        {badge && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm uppercase">
            {badge}
          </span>
        )}

        {/* Overlay flou au hover */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded-md z-10"></div>

        {/* Bouton Réserver centré */}
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 z-20"
          onClick={() => alert(`Réservation du livre "${title}"`)}
        >
          Réserver
        </button>
      </div>

      <p className="text-green-500 font-semibold mt-3">{price}</p>
      <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">by {author}</p>
    </div>
  );
};

export default Book;
