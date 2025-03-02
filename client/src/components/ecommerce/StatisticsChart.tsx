import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", CS: 30, IT: 25, Eng: 20 },
  { month: "Feb", CS: 35, IT: 28, Eng: 22 },
  { month: "Mar", CS: 40, IT: 32, Eng: 24 },
  { month: "Apr", CS: 45, IT: 35, Eng: 27 },
  { month: "May", CS: 50, IT: 38, Eng: 30 },
];

const StatisticsChart = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-gray-400">Enrollment Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CS" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="IT" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="Eng" stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
