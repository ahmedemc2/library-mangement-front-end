import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaBook,
  FaMagic,
  FaFlask,
  FaHeart,
  FaGlobe,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const ExploreCategories = () => {
  const CategoryCard = ({ title, count, Icon, className }) => {
    return (
      <div
        className={`${className} flex p-5 py-7 items-center justify-center gap-5 bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-md`}
      >
        <div>
          <Icon className="text-gray-800 text-4xl " />
        </div>
        <div>
          <h2 className="text-gray-400 font-semibold text-xl">{title}</h2>
          <p className="text-gray-800">{count} Books</p>
        </div>
      </div>
    );
  };

  const Categories = [
    {
      idCategorie: "categorie1ZF",
      nameCategorie: "Fiction",
      Icon: FaBook,
      count: 300,
      className: "col-start-1 col-end-2 row-start-1 row-end-2",
    },
    {
      idCategorie: "categorie2ZF",
      nameCategorie: "Fantasy",
      Icon: FaMagic,
      count: 300,
      className: "col-start-2 col-end-3 row-start-1 row-end-3",
    },
    {
      idCategorie: "categorie3ZF",
      nameCategorie: "Science",
      Icon: FaFlask,
      count: 300,
      className: "col-start-3 col-end-4 row-start-1 row-end-2",
    },
    {
      idCategorie: "categorie4ZF",
      nameCategorie: "Romance",
      Icon: FaHeart,
      count: 300,
      className: "col-start-4 col-end-5 row-start-1 row-end-2",
    },
    {
      idCategorie: "categorie5ZF",
      nameCategorie: "Travel",
      Icon: FaGlobe,
      count: 300,
      className: "col-start-1 col-end-2 row-start-2 row-end-3",
    },
    {
      idCategorie: "categorie6ZF",
      nameCategorie: "Programming",
      Icon: FaLaptopCode,
      count: 300,
      className: "col-start-3 col-end-4 row-start-2 row-end-3",
    },
    {
      idCategorie: "categorie7ZF",
      nameCategorie: "Business",
      Icon: FaChartLine,
      count: 300,
      className: "col-start-4 col-end-5 row-start-2 row-end-3",
    },
  ];

  return (
    <div id="categories" className="my-20 px-4 h-screen pt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-5 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <p className="text-blue-500">TOP CATEGORIES</p>
          <h3 className="text-white text-3xl">Explore Categories</h3>
        </div>
        <button className="text-blue-500 flex items-center gap-x-2">
          VIEW ALL <HiArrowNarrowRight />
        </button>
      </div>

      {/* Grid */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4 max-w-7xl mx-auto">
        {Categories.map((Category) => {
          const { idCategorie, nameCategorie, Icon, count, className } =
            Category;

          return (
            <CategoryCard
              key={idCategorie}
              title={nameCategorie}
              Icon={Icon}
              count={count}
              className={className}
            />
          );
        })}
      </div>

      {/* Responsive fallback: simple grid for small screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden max-w-7xl mx-auto">
        {Categories.map(({ idCategorie, nameCategorie, Icon, count }) => (
          <CategoryCard
            key={idCategorie}
            title={nameCategorie}
            Icon={Icon}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
