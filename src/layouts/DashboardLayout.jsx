import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg">
        <Sidebar />
      </div>

      {/* Sidebar (mobile overlay) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 h-full bg-white dark:bg-gray-800 shadow-lg">
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </div>

        {/* Dark backdrop when sidebar is open */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
