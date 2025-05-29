import { useState } from "react";

const EditBook = ({ initialBook, onSave }) => {
  // initialBook = { id, title, author, publishedDate, description }
  // onSave = fonction callback appelée à la soumission avec le livre modifié

  const [book, setBook] = useState({
    title: initialBook?.title || "",
    author: initialBook?.author || "",
    publishedDate: initialBook?.publishedDate || "",
    description: initialBook?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book);
  };

  return (
    <div className="min-h-screen text-white py-10 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-90 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">✏️ Modifier le livre</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Titre */}
          <div>
            <label htmlFor="title" className="block mb-1 text-sm font-medium">
              Titre
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={book.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Auteur */}
          <div>
            <label htmlFor="author" className="block mb-1 text-sm font-medium">
              Auteur
            </label>
            <input
              id="author"
              name="author"
              type="text"
              value={book.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Date de publication */}
          <div>
            <label
              htmlFor="publishedDate"
              className="block mb-1 text-sm font-medium">
              Date de publication
            </label>
            <input
              id="publishedDate"
              name="publishedDate"
              type="date"
              value={book.publishedDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={book.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Boutons */}
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition">
              Enregistrer
            </button>
            <button
              type="reset"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-md transition">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
