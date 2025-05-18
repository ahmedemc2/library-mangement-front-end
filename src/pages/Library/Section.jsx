import React from "react";
import Book from "../../components/book";

const Section = ({ title, books }) => {
  return (
    <section className="">
      <h2 className="text-xl text-white font-semibold mb-4">{title}</h2>
      <div className="flex justify-start gap-10 flex-wrap">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default Section;
