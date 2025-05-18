import { useEffect, useState } from "react";
import Section from "./Section";
import API from "../../services/api";
import Header from "./Header";

const Main = () => {
  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await API.get("/books");
        setBooks(response.data.data.data);
        console.log(response.data.data.data);
      } catch (error) {
        console.error("Error Getting Books", error);
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    const searchBooks = async (search) => {
      try {
        const response = await API.get(`/books/search?q=${search}`);

        console.log(response.data.data.data);
        setBooks(response.data.data.data);
      } catch (error) {
        console.error("Error Getting Books", error);
      }
    };
    console.log(search);
    searchBooks(search);
  }, [search]);

  return (
    <div className="relative">
      <Header search={search} onSearching={setSearch} />
      {search.length > 0 ? (
        <Section title={search} books={books} />
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
