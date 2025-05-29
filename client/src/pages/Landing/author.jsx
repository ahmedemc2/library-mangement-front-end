import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const authors = [
  {
    id: 1,
    name: "Fatima Souad",
    image: "https://i.pravatar.cc/150?img=12",
    booksCount: 34,
  },
  {
    id: 2,
    name: "Robert Igwe",
    image: "https://i.pravatar.cc/150?img=33",
    booksCount: 27,
  },
  {
    id: 3,
    name: "Rana Anderson",
    image: "https://i.pravatar.cc/150?img=47",
    booksCount: 21,
  },
  {
    id: 4,
    name: "Kings Fonseca",
    image: "https://i.pravatar.cc/150?img=56",
    booksCount: 18,
  },
  {
    id: 5,
    name: "Fatima Souad",
    image: "https://i.pravatar.cc/150?img=1",
    booksCount: 34,
  },
  {
    id: 6,
    name: "Robert Igwe",
    image: "https://i.pravatar.cc/150?img=2",
    booksCount: 27,
  },
  {
    id: 7,
    name: "Rana Anderson",
    image: "https://i.pravatar.cc/150?img=3",
    booksCount: 21,
  },
  {
    id: 8,
    name: "Kings Fonseca",
    image: "https://i.pravatar.cc/150?img=4",
    booksCount: 18,
  },
];

const PopularAuthors = () => {
  return (
    <section id="author" className="py-20 px-4 text-white h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Our Authors
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Most Popular Authors</h2>
        <p className="text-gray-400 mt-2">Meet the minds behind the books</p>
      </div>

      {/* Authors Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition transform duration-300"
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-300">{author.booksCount} books</p>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-10">
        <button className="text-blue-500 flex items-center gap-x-2">
          Explore More <HiArrowNarrowRight />
        </button>
      </div>
    </section>
  );
};

export default PopularAuthors;
