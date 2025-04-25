// SoilMoistureChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample soil moisture data
const data = [
  { day: "Mon", moisture: 40 },
  { day: "Tue", moisture: 38 },
  { day: "Wed", moisture: 42 },
  { day: "Thu", moisture: 36 },
  { day: "Fri", moisture: 39 },
];

export default function SoilMoistureChart() {
  return (
    <div className="card">
      <h2>🌱 Soil Moisture (Last 5 Days)</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="moisture" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
