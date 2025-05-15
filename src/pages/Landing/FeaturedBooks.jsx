import React, { useState } from "react";

const FeaturedBooks = () => {
  const [categories, setCategories] = useState([
    { idCategory: "category1ZZ", categoryName: "All", isActive: true },
    { idCategory: "category2ZZ", categoryName: "Fantasy", isActive: false },
    { idCategory: "category3ZZ", categoryName: "Science", isActive: false },
    { idCategory: "category4ZZ", categoryName: "Romance", isActive: false },
  ]);

  const handleCategoryClick = (idCategory) => {
    const newCategories = categories.map((category) => ({
      ...category,
      isActive: category.idCategory === idCategory,
    }));
    setCategories(newCategories);
  };

  console.log(categories);

  return (
    <div className="pb-96">
      <div className="flex flex-col items-center gap-2 relative ">
        <p className="text-blue-500">FEATURED BOOKS</p>
        <p className="text-white text-3xl">What Will You Discover?</p>
        <ul className="text-white flex gap-5 justify-center mt-8 w-fit pb-2 px-3 relative z-[1]">
          {categories.map((category) => {
            const { idCategory, categoryName, isActive } = category;
            return (
              <li
                key={idCategory}
                onClick={() => handleCategoryClick(idCategory)}
                className={`${
                  isActive ? "text-blue-500" : " border-gray-500"
                } border-b-2 pb-2 cursor-pointer select-none`}
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
        <div className="border-b-2 border-gray-500 absolute bottom-2 z-[0] w-80"></div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
