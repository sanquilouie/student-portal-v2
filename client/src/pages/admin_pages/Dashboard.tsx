import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import { useEffect, useState } from "react";

export default function Dashboard() {
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
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <EcommerceMetrics 
        totalStudents={counts.totalStudents} 
        totalFaculty={counts.totalFaculty} 
        totalPrograms={counts.totalPrograms} 
        totalSubjects={counts.totalSubjects} 
      />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <StatisticsChart />
        </div>
        <div className="col-span-12 xl:col-span-4">
         <RecentOrders />
        </div>
      </div>
    </>
  );
}
