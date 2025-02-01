import { useState, useEffect } from "react";
import axios from "axios";

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

  const [userData, setUserData] = useState(null); // Track user data
  const [loading, setLoading] = useState(true);   // Track loading state

  useEffect(() => {
    // Fetch user data from /home endpoint
    axios
      .get('http://localhost:3001/home', { withCredentials: true })
      .then((response) => {
        // Update user data and set loading to false
        setUserData(response.data);
        setLoading(false);  // Stop the loading indicator
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Stop the loading even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading if data is still being fetched
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-between items-center text-black">
      <span className="text-xl font-bold">{userData.lname}, {userData.fname}</span>
      <span className="text-xl font-bold">{currentTime}</span>
    </nav>
  );
}
