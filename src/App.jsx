import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing/Landing";
import Library from "./pages/Library/Library";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/library" element={<Library />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
