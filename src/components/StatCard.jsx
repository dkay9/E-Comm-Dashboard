// A reusable card component to display key metrics (e.g. Orders, Revenue)
// Props:
// - title: label for the metric (string)
// - value: main number/statistic (string or number)
// - icon: JSX icon element (e.g. from lucide-react)
// - trend: optional % change (positive or negative number)

export default function StatCard({ title, value, icon, trend }) {
  return (
    // Outer card container
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between">
      
      {/* Left section: text content */}
      <div>
        {/* Small gray label (title of the stat) */}
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>

        {/* Main large value */}
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>

        {/* Conditional: show trend only if trend prop exists */}
        {trend && (
          <p
            className={`text-sm ${
              trend > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {/* ▲ for positive, ▼ for negative */}
            {trend > 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
          </p>
        )}
      </div>

      {/* Right section: icon container */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        {icon}
      </div>
    </div>
  );
}
