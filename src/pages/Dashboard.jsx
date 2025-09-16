import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";
import StatCard from "../components/StatCard";
import DashboardLayout from "../layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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
    </DashboardLayout>
  );
}
