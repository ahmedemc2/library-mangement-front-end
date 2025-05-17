import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing/Landing";
import Library from "./pages/Library/Library";
import ReservationsPage from "./pages/Library/reservation";
import NotificationsPage from "./pages/Library/Notification";
import AccountPage from "./pages/Library/AccountPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/library" element={<Library />} />
        <Route path="/res" element={<ReservationsPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/noti" element={<NotificationsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
