import axios from "axios";
import { HomeIcon, BarChart2Icon, CalendarCheck, Users, BookOpen, UploadCloud } from "lucide-react";

const handleLogout = async () => {
    try {
        await axios.post("http://localhost:3001/logout");
        window.location.href = "/admin";
    } catch (error) {
        console.error("Logout failed", error);
    }
  };

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-gray-900">
        <a className="flex items-center w-full px-3 mt-3" href="#">
            <span className="ml-2 text-sm font-bold">Faculty</span>
        </a>
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <HomeIcon className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Dashboard</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <CalendarCheck className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Grades</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <Users className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Scheduling</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <BookOpen className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Students</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <BarChart2Icon className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Subjects</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <UploadCloud className="w-6 h-6" />
                <span className="ml-2 text-sm font-medium">Uploads</span>
            </a>
        </div>
        <a onClick={handleLogout} className="flex items-center justify-center w-full h-10 mt-auto bg-red-800 hover:bg-red-700 hover:text-gray-300" href="#">
            <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5" stroke="#000000"/>
            </svg>
            <span className="ml-2 text-sm font-medium">Logout</span>
        </a>
    </div>
  )
}

export default HomePage