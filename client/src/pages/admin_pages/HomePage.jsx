import { useState } from "react";
import axios from "axios";
import { 
    LayoutDashboard, Wallet, Users, ClipboardCheck, 
    CalendarCheck, GraduationCap, BookOpen, UploadCloud, 
    ChevronDown, ChevronUp 
} from "lucide-react";

const handleLogout = async () => {
    try {
        await axios.post("http://localhost:3001/logout"); 
        window.location.href = "/admin"; 
    } catch (error) {
        console.error("Logout failed", error);
    }
};

const HomePage = () => {
    const [isUsersOpen, setIsUsersOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-gray-900">
            <a className="flex items-center w-full px-3 mt-3" href="#">
                <span className="ml-2 text-sm font-bold">Admin</span>
            </a>
            <div className="w-full px-2 flex-grow">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <LayoutDashboard className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Dashboard</span>
                    </a>

                    <button 
                        onClick={() => setIsUsersOpen(!isUsersOpen)}
                        className="flex items-center justify-between w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    >
                        <div className="flex items-center">
                            <Users className="w-6 h-6" />
                            <span className="ml-2 text-sm font-medium">Users</span>
                        </div>
                        {isUsersOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isUsersOpen && (
                        <div className="w-full pl-8">
                            <a className="flex items-center w-full h-10 px-3 mt-1 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <Wallet className="w-5 h-5" />
                                <span className="ml-2 text-sm font-medium">Cashier</span>
                            </a>
                            <a className="flex items-center w-full h-10 px-3 mt-1 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <Users className="w-5 h-5" />
                                <span className="ml-2 text-sm font-medium">Faculty</span>
                            </a>
                            <a className="flex items-center w-full h-10 px-3 mt-1 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <GraduationCap className="w-5 h-5" />
                                <span className="ml-2 text-sm font-medium">Students</span>
                            </a>
                        </div>
                    )}

                    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <ClipboardCheck className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Registration</span>
                    </a>
                    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <CalendarCheck className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Schedule</span>
                    </a>
                    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <BookOpen className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Subjects</span>
                    </a>
                    <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                        <UploadCloud className="w-6 h-6" />
                        <span className="ml-2 text-sm font-medium">Upload</span>
                    </a>
                </div>
            </div>
            <a onClick={handleLogout} className="flex items-center justify-center w-full h-10 mt-auto bg-red-800 hover:bg-red-700 hover:text-gray-300" href="#">
                <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5" stroke="#000000"/>
                </svg>
                <span className="ml-2 text-sm font-medium">Logout</span>
            </a>
        </div>
    );
};

export default HomePage;
