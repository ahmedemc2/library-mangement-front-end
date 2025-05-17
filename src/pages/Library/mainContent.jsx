import book1 from "../../assets/images/cover.jpg";
import Section from "./Section";

const Main = () => {
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
      image: book1,
    },
    {
      id: 3,
      title: "Embrace The Wild",
      author: "Rana Anderson",
      price: "$39.00",
      image: book1,
      badge: "25% OFF",
    },
    {
      id: 4,
      title: "Galaxy Party Here",
      author: "Kings Fonseca",
      price: "$48.00",
      image: book1,
      badge: "HOT",
    },
  ];

  return (
    <>
      <Section title="Most Popular" books={books} />
      <Section title="Recommended" books={books} />
    </>
  );
};
export default Main;
