import { Link } from "react-router-dom";
import { X, Home, ShoppingCart, Users, Package, Settings } from "lucide-react";

export default function Sidebar({ closeSidebar }) {
  return (
    <div className="h-full flex flex-col">
      {/* Close button (mobile only) */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={closeSidebar}>
          <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      {/* Logo */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Logo
        </h1>
      </div>

      {/* Links */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/orders"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Orders</span>
        </Link>

        <Link
          to="/customers"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Users className="w-5 h-5" />
          <span>Customers</span>
        </Link>

        <Link
          to="/products"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Package className="w-5 h-5" />
          <span>Products</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}
