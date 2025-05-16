import React from "react";
import Book from "../../components/book";

const Section = ({ title, books }) => {
  return (
    <section className="my-6">
      <h2 className="text-xl text-white font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default Section;
