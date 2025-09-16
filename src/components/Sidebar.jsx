import { X, Home, ShoppingCart, BarChart } from "lucide-react";

export default function Sidebar({ closeSidebar }) {
  return (
    <div className="h-full flex flex-col">
      {/* Close button (mobile only) */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={closeSidebar}>
          <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 px-4 space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Orders</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <BarChart className="w-5 h-5" />
          <span>Analytics</span>
        </a>
      </nav>
    </div>
  );
}
