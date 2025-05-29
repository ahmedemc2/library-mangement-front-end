import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { setSearchBook } from "../../store/searchSlice";
import { useDispatch } from "react-redux";

const genres = [
  "Fiction",
  "Novel",
  "Science Fiction",
  "Fantasy",
  "Non-fiction",
  "Genre Fiction",
  "Mystery",
  "Thriller",
  "Young Adult",
  "Romance",
  "Horror",
];

const writers = [
  { name: "Amelia Atwater" },
  { name: "Christopher Paolini" },
  { name: "Jonathan Franzen" },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const [selectedGenre, setSelectedGenres] = useState("");

  const onGenreClick = (genre) => {
    dispatch(setSearchBook(genre));
    setSelectedGenres(genre);
  };

  return (
    <aside className="bg-[#2d2d44] text-white p-6 hidden md:block fixed min-h-screen w-[20%]">
      <h2 className="text-xl font-bold mb-6">
        Digital<span className="text-blue-500">BOOK</span>
      </h2>

      <div className="mb-8">
        <h3 className="text-gray-400 font-semibold mb-2">Genres</h3>
        <ul className="space-y-1 text-sm">
          {genres.map((genre, i) => (
            <li
              onClick={() => onGenreClick(genre)}
              key={i}
              className={`hover:text-blue-950 font-bold cursor-pointer py-2 ps-2 hover:bg-gray-500 ${
                genre === selectedGenre && "text-blue-950 bg-gray-500"
              }`}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-gray-400 font-semibold mb-2">Popular Writers</h3>
        <ul className="space-y-1 text-sm">
          {writers.map((writer, i) => (
            <li
              key={i}
              className="flex items-center gap-2 hover:text-blue-500 cursor-pointer"
            >
              <FaUserCircle /> {writer.name}
            </li>
          ))}
        </ul>
        <button className="mt-2 text-blue-500 text-sm hover:text-blue-600 cursor-pointer">
          See All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
