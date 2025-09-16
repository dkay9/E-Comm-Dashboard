import { useState, useEffect } from "react";
import { Menu, Sun, Moon, Bell, User } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Dashboard
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Bell className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Profile */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
          <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </div>
      </div>
    </header>
  );
}
