import { useState, useEffect } from "react";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString("en-US", { 
        month: "2-digit", 
        day: "2-digit", 
        year: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: true 
      }));
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-between items-center text-black">
      <span className="text-xl font-bold">Student</span>
      <span className="text-xl font-bold">{currentTime}</span>
    </nav>
  );
}
