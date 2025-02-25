import { useEffect, useState } from "react";
import { Users, Briefcase, Book, Layers } from "lucide-react";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    totalStudents: 0,
    totalFaculty: 0,
    totalPrograms: 0,
    totalSubjects: 0
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch("http://localhost:3001/counts");
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-y-2 gap-x-4 px-4 mt-8 md:grid-cols-4 md:px-8">
  {/* Stats Row */}
  {[
    { label: "Total Students", count: counts.totalStudents, color: "bg-green-300", icon: <Users className="h-12 w-12 text-white" /> },
    { label: "Total Faculty", count: counts.totalFaculty, color: "bg-blue-300", icon: <Briefcase className="h-12 w-12 text-white" /> },
    { label: "Total Courses", count: counts.totalPrograms, color: "bg-indigo-300", icon: <Book className="h-12 w-12 text-white" /> },
    { label: "Total Subjects", count: counts.totalSubjects, color: "bg-red-300", icon: <Layers className="h-12 w-12 text-white" /> }
  ].map(({ label, count, color, icon }) => (
    <div key={label} className="flex items-center bg-white border rounded-sm overflow-hidden shadow min-h-[100px] px-6">
      <div className={`p-4 ${color}`}>
        {icon}
      </div>
      <div className="px-4 text-gray-700">
        <h3 className="text-sm tracking-wider">{label}</h3>
        <p className="text-3xl">{count}</p>
      </div>
    </div>
  ))}

  {/* Graph & Buttons Row */}
  <div className="bg-white border rounded-sm overflow-hidden shadow p-6 md:col-span-3 h-fit">
    <h3 className="text-lg font-semibold text-gray-700">Graph Area</h3>
    <div className="h-32 bg-gray-200 flex items-center justify-center">Graph Placeholder</div>
  </div>

  <div className="bg-white border rounded-sm overflow-hidden shadow p-6 md:col-span-1 flex flex-col space-y-4 h-fit">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Button 1</button>
    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Button 2</button>
    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Button 3</button>
  </div>
</div>

  );
};

export default Dashboard;
