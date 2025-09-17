import { useEffect, useState } from "react";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";
import StatCard from "../components/StatCard";
import StatCardSkeleton from "../components/StatCardSkeleton";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake API delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {loading ? (
        <>
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
