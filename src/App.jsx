import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

const Orders = () => <h1>Orders Page</h1>;
const Customers = () => <h1>Customers Page</h1>;
const Products = () => <h1>Products Page</h1>;
const Settings = () => <h1>Settings Page</h1>;

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* 👈 redirect root */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
