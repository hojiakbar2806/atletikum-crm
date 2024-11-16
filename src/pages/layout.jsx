import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = memo(() => {
  return (
    <main className="flex h-screen transition-all duration-300 dark:bg-gray-800">
      <Sidebar />
      <section className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
});

export default Layout;
