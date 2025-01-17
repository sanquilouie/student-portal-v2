
const HomePage = () => {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
        <div className="grid grid-cols-4 gap-8">
          <button className="w-64 h-64 bg-blue-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-blue-600 transition duration-300">
            Student Profile
          </button>
          <button className="w-64 h-64 bg-green-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-green-600 transition duration-300">
            Grades
          </button>
          <button className="w-64 h-64 bg-yellow-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-yellow-600 transition duration-300">
            Billing
          </button>
          <button className="w-64 h-64 bg-purple-500 text-white text-xl font-semibold rounded-2xl shadow-lg hover:bg-purple-600 transition duration-300">
            Schedule
          </button>
        </div>
      </div>
    );
  }; 

export default HomePage