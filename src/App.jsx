import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing/Landing";
import Library from "./pages/Library/Library";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app/*" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
