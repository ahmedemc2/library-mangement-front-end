import React from "react";
import { FaUserCircle } from "react-icons/fa";

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
  "See All",
];

const writers = [
  { name: "Amelia Atwater" },
  { name: "Christopher Paolini" },
  { name: "Jonathan Franzen" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#2d2d44] text-white p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-6">
        HOME<span className="text-blue-500">LIBRARY</span>
      </h2>

      <div className="mb-8">
        <h3 className="text-gray-400 font-semibold mb-2">Genres</h3>
        <ul className="space-y-1 text-sm">
          {genres.map((genre, i) => (
            <li
              key={i}
              className={`hover:text-blue-600 cursor-pointer ${
                i === genres.length - 1 && "text-blue-500"
              }`}>
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
              className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
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
