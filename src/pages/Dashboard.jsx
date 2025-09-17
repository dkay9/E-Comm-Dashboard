import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";
import StatCard from "../components/StatCard";
import LineChartComponent from "../components/LineChart";
import OrdersTable from "../components/OrdersTable"; 
import SalesChart from "../components/SalesChart";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* ---------- Top row: Stat Cards ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Orders"
          value="1,245"
          trend={12}
          icon={<ShoppingCart className="w-6 h-6" />}
        />
        <StatCard
          title="Customers"
          value="3,580"
          trend={-4}
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Revenue"
          value="$23,450"
          trend={8}
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          title="Products"
          value="320"
          trend={0}
          icon={<Package className="w-6 h-6" />}
        />
      </div>

      {/* ---------- Second row: LineChart (left) + PieChart (right) ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line chart (2/3 width) */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Revenue Trend
          </h2>
          <LineChartComponent />
        </div>

        {/* Pie chart (1/3 width, same row as line chart) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Sales Breakdown
          </h2>
          {/* Ensure PieChart fills available height but doesn’t stretch too tall */}
          <div className="flex-1 h-64">
            <SalesChart />
          </div>
        </div>
      </div>

      {/* ---------- Third row: Orders table full width ---------- */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <OrdersTable />
      </div>
    </div>
  );
}
