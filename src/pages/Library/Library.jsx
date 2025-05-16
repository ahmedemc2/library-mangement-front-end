import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import Section from "./Section";
import book1 from "../../assets/images/cover.jpg";
import book2 from "../../assets/images/cover.jpg";
import book3 from "../../assets/images/cover.jpg";
import book4 from "../../assets/images/cover.jpg";

const Library = () => {
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

  return (
    <div className="flex bg-[#1e1e2f] min-h-screen">
      <Sidebar />
      <main className="flex-1 px-6">
        <Header />
        <Section title="Most Popular" books={books} />
        <Section title="Recommended" books={books} />
      </main>
    </div>
  );
};

export default Library;
