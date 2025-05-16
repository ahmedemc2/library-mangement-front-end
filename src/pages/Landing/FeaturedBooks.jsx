import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import book1 from "../../assets/images/cover.jpg";
import book2 from "../../assets/images/cover.jpg";
import book3 from "../../assets/images/cover.jpg";
import book4 from "../../assets/images/cover.jpg";
import Book from "../../components/book";

const books = [
  {
    id: 1,
    title: "Read Freely",
    author: "Fatima Souad",
    price: "$45.00",
    image: book1,
    badge: "HOT",
  },
  {
    id: 2,
    title: "Arigatou Gozaimas",
    author: "Robert Igwe",
    price: "$19.00",
    image: book2,
  },
  {
    id: 3,
    title: "Embrace The Wild",
    author: "Rana Anderson",
    price: "$39.00",
    image: book3,
    badge: "25% OFF",
  },
  {
    id: 4,
    title: "Galaxy Party Here",
    author: "Kings Fonseca",
    price: "$48.00",
    image: book4,
    badge: "HOT",
  },
];

const FeaturedBooks = () => {
  const [categories, setCategories] = useState([
    { idCategory: "category1", categoryName: "All", isActive: true },
    { idCategory: "category2", categoryName: "Fantasy", isActive: false },
    { idCategory: "category3", categoryName: "Science", isActive: false },
    { idCategory: "category4", categoryName: "Romance", isActive: false },
  ]);

  const handleCategoryClick = (idCategory) => {
    const newCategories = categories.map((category) => ({
      ...category,
      isActive: category.idCategory === idCategory,
    }));
    setCategories(newCategories);
  };

  return (
    <div className="py-16 px-4">
      <div className="flex flex-col items-center gap-2 mb-10">
        <p className="text-blue-500 text-sm tracking-widest font-semibold uppercase">
          Featured Books
        </p>
        <h2 className="text-3xl font-bold text-white">
          What Will You Discover?
        </h2>

        <ul className="flex gap-6 mt-8 border-b border-gray-300 ">
          {categories.map(({ idCategory, categoryName, isActive }) => (
            <li
              key={idCategory}
              onClick={() => handleCategoryClick(idCategory)}
              className={`cursor-pointer pb-2 border-b-2 transition duration-300 ${
                isActive
                  ? "border-blue-500 text-blue-600 font-medium"
                  : "border-transparent text-gray-500"
              }`}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>

      {/* Grid of Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {books.slice(0, 4).map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-10">
        <button className="text-blue-500 flex items-center gap-x-2">
          Explore More <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedBooks;
