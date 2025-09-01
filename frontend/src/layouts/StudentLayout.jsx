// src/layouts/StudentLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content area: sidebar + main content */}
      <div className="flex flex-1 mt-4 mb-4">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300`}>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
