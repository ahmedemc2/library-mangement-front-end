import { useEffect, useState } from "react";
import Section from "./Section";
import API from "../../services/api";
import Header from "./Header";
import { useSelector } from "react-redux";

const Main = () => {
  const [books, setBooks] = useState([]);

  const searchBook = useSelector((state) => state.searchBook.searchBook) || "";

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await API.get("/books");
        setBooks(response.data.data.data);
      } catch (error) {
        console.error("Error Getting Books", error);
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    const searchBooks = async (search) => {
      if (search !== "") {
        try {
          const response = await API.get(`/books/search?q=${search}`);
          console.log(response.data.data.data);
          setBooks(response.data.data.data);
        } catch (error) {
          console.error("Error Getting Books", error);
        }
      }
    };
    searchBooks(searchBook);
  }, [searchBook]);

  return (
    <div className="relative">
      <Header />
      {searchBook?.length > 0 ? (
        <Section title={searchBook} books={books} />
      ) : (
        <>
          <Section title="Most Popular" books={books.slice(0, 5)} />
          <Section title="Recommended" books={books.slice(0, 5)} />
        </>
      )}
    </div>
  );
};
export default Main;
