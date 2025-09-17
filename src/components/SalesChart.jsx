// PieChartComponent.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Dummy data for now (later we can pull from API or DB)
const data = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home", value: 300 },
  { name: "Other", value: 200 },
];

// Colors for each slice of the pie
const COLORS = ["#4F46E5", "#22C55E", "#F97316", "#E11D48"];

export default function SalesChart() {
  return (
    // Responsive container to make it scale with parent
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        {/* Main Pie */}
        <Pie
          data={data}
          cx="50%" // horizontal center
          cy="50%" // vertical center
          outerRadius={100} // size of the pie
          fill="#8884d8"
          dataKey="value"
          label // show labels on slices
        >
          {/* Apply different colors to each slice */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Tooltip shows value when you hover */}
        <Tooltip />

        {/* Legend below/right of the chart */}
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
