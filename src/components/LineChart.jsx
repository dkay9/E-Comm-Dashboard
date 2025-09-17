import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ✅ Sample dummy data (you’ll replace with real data later)
const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 4890 },
  { name: "Jun", revenue: 6390 },
];

export default function LineChartComponent() {
  return (
    // ResponsiveContainer makes the chart scale to parent container width/height
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        {/* Background grid lines for readability */}
        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-600" />

        {/* X axis → labels will come from "name" in data */}
        <XAxis dataKey="name" stroke="#9CA3AF" /> 
        {/* Y axis → auto scales based on "revenue" values */}
        <YAxis stroke="#9CA3AF" />

        {/* Tooltip → shows value on hover */}
        <Tooltip
          contentStyle={{ backgroundColor: "#1F2937", color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />

        {/* Line itself → stroke is the line color */}
        <Line
          type="monotone"
          dataKey="revenue" // points to the field in data
          stroke="#3B82F6"  // Tailwind blue-500
          strokeWidth={2}
          dot={{ r: 4 }}   // small circle at each data point
          activeDot={{ r: 6 }} // larger dot on hover
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
