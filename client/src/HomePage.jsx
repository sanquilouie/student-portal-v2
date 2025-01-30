import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="grid grid-cols-4 gap-8">
          <Link to="/studentprofile" className="w-64 h-64 bg-blue-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center">
            Student Profile
          </Link>
          <Link to="/studentgrades" className="w-64 h-64 bg-green-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-green-600 transition duration-300 flex justify-center items-center">
            Grades
          </Link>
          <Link to="/studentbilling" className="w-64 h-64 bg-yellow-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 transition duration-300 flex justify-center items-center">
            Billing
          </Link>
          <Link to="/studentschedule" className="w-64 h-64 bg-purple-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-purple-600 transition duration-300 flex justify-center items-center">
            Schedule
          </Link>
        </div>
      </div>
    );
  }; 

export default HomePage