import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing/Landing";
import Library from "./pages/Library/Library";
import AdminDashboard from "./pages/Admin/Admin";
import EditBook from "./pages/Admin/EditBook";
import AddBook from "./pages/Admin/AddBook";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Landing/Navbar";

const App = () => {
  return (
    <main className="bg-[#1e1e2f] h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/*" element={<Library />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/editbook" element={<EditBook />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
