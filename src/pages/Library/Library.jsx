import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import Main from "./MainContent";
import NotificationsPage from "./Notification";
import ReservationsPage from "./reservation";
import AccountPage from "./AccountPage";

import { Routes, Route } from "react-router-dom";

const Library = () => {
  return (
    <div className="flex bg-[#1e1e2f] min-h-screen">
      <Sidebar />
      <main className="flex-1 px-6">
        <Header />
        <Routes>
          <Route path="/books" element={<Main />} />
          <Route path="/noti" element={<NotificationsPage />} />
          <Route path="/res" element={<ReservationsPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Library;
