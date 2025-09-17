import React, { useEffect, useMemo, useState } from "react";

/*
  OrdersTable
  - Renders a full-width recent orders table (placed below the line chart)
  - Features:
    - fake sample data (swap for real API later)
    - search by order id / customer
    - sort by date or total
    - simple client-side pagination
    - loading skeleton state
*/

const SAMPLE_ORDERS = [
  { id: "#1006", customer: "Ada Lovelace", date: "2025-09-15", total: 199.99, status: "Completed" },
  { id: "#1005", customer: "Chidi Anagonye", date: "2025-09-14", total: 79.5, status: "Pending" },
  { id: "#1004", customer: "Michael Brown", date: "2025-09-13", total: 45.5, status: "Cancelled" },
  { id: "#1003", customer: "Emily Davis", date: "2025-09-12", total: 230.75, status: "Completed" },
  { id: "#1002", customer: "Jane Smith", date: "2025-09-11", total: 89.99, status: "Pending" },
  { id: "#1001", customer: "John Doe", date: "2025-09-10", total: 120.0, status: "Completed" },
  // add more rows to test pagination
  { id: "#1000", customer: "Ifeoma Obi", date: "2025-09-09", total: 55.0, status: "Completed" },
  { id: "#0999", customer: "Kemi A.", date: "2025-09-08", total: 12.34, status: "Cancelled" },
  { id: "#0998", customer: "Tunde B.", date: "2025-09-07", total: 400.0, status: "Completed" },
  { id: "#0997", customer: "Nneka E.", date: "2025-09-06", total: 22.0, status: "Pending" },
];

function formatCurrency(n) {
  // small currency formatter (USD). Replace with Intl if you need localization.
  return `$${Number(n).toFixed(2)}`;
}

export default function OrdersTable({ initialData = null }) {
  // local state
  const [orders, setOrders] = useState(initialData ?? []);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  // simulate fetching data on mount (replace with real API call later)
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setOrders(initialData ?? SAMPLE_ORDERS);
      setLoading(false);
    }, 600); // short fake delay so skeleton is visible
    return () => clearTimeout(t);
  }, [initialData]);

  // filter + sort - memoized for performance
  const filteredAndSorted = useMemo(() => {
    // 1) filter by search
    const filtered = (orders || []).filter((o) => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return (
        o.id.toLowerCase().includes(q) ||
        o.customer.toLowerCase().includes(q)
      );
    });

    // 2) sort
    const sorted = filtered.slice().sort((a, b) => {
      const { key, direction } = sortConfig;
      let cmp = 0;
      if (key === "date") {
        cmp = new Date(a.date) - new Date(b.date);
      } else if (key === "total") {
        cmp = a.total - b.total;
      } else {
        cmp = String(a[key]).localeCompare(String(b[key]));
      }
      return direction === "asc" ? cmp : -cmp;
    });

    return sorted;
  }, [orders, search, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / PAGE_SIZE));
  const currentRows = filteredAndSorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // toggles sorting: if same key clicked, flip direction; otherwise set to desc by default
  function requestSort(key) {
    setPage(1); // reset to first page when sorting changes
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "desc" };
    });
  }

  // small helper for badge styles
  function statusClasses(status) {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700"; // Cancelled / others
  }

  // render a tiny skeleton row while loading
  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="px-4 py-3"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"/></td>
      <td className="px-4 py-3"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"/></td>
      <td className="px-4 py-3"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"/></td>
      <td className="px-4 py-3"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"/></td>
      <td className="px-4 py-3"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"/></td>
    </tr>
  );

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      {/* header: title + search input */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Orders</h3>

        {/* search input */}
        <div className="flex items-center space-x-2">
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search orders or customers..."
            className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={() => { setSearch(""); setPage(1); }}
            className="text-sm px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            Reset
          </button>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-xs text-gray-600 dark:text-gray-300 uppercase">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>

              {/* clickable header to sort by date */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("date")}
              >
                Date
                {/* small sort indicator */}
                <span className="ml-2 text-gray-400">
                  {sortConfig.key === "date" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </span>
              </th>

              {/* clickable header to sort by total */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("total")}
              >
                Total
                <span className="ml-2 text-gray-400">
                  {sortConfig.key === "total" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </span>
              </th>

              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800 dark:text-gray-200">
            {/* loading skeleton rows */}
            {loading &&
              Array.from({ length: PAGE_SIZE }).map((_, i) => <SkeletonRow key={i} />)}

            {/* empty state */}
            {!loading && filteredAndSorted.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  No orders found.
                </td>
              </tr>
            )}

            {/* actual rows */}
            {!loading &&
              currentRows.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 font-medium">{o.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      {/* avatar placeholder (initials) */}
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-200">
                        {o.customer.split(" ").map(n => n[0]).slice(0,2).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{o.customer}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Customer</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{o.date}</td>
                  <td className="px-4 py-3">{formatCurrency(o.total)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses(o.status)}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      {!loading && filteredAndSorted.length > PAGE_SIZE && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {(page - 1) * PAGE_SIZE + 1} - {Math.min(page * PAGE_SIZE, filteredAndSorted.length)} of {filteredAndSorted.length}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
            >
              Prev
            </button>
            <div className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-900 rounded-md">
              {page} / {totalPages}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
