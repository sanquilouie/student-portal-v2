import { useNavigate } from 'react-router-dom';
import bgImage from './assets/images/bg-image.jpg';
import schoolLogo from './assets/images/school-logo.png';
import { useState, useEffect } from "react";
import { AlertTriangle } from 'lucide-react';
import axios from 'axios';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentid, setStudentID] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {studentid}, { withCredentials: true })
          .then(result => {
              console.log(result)
              console.log(result.data)
              if(result.data.status === "Success"){
                  navigate('/home')
              }   
          })
          .catch(err=> console.log(err)) 
  }

  const [userData, setUserData] = useState(null);

  const handleUserValidation = (e) => {
    e.preventDefault();
    setIsOpen(true);
    axios
      .post('http://localhost:3001/prompt', {studentid})
      .then((response) => {
        console.log(response.data)
        setUserData(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  
  // Function to update time and date
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const updateTime = () => {
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const dateString = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    setTime(timeString);
    setDate(dateString);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[20%] flex justify-center">
        <div className="mt-auto">
            <span className="text-6xl font-bold">Student Information System</span>
        </div>
      </div>

      <div className="h-[80%] flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-start pl-6">
            <span className="text-black text-9xl font-bold">{time}</span>
            <span className="text-black text-3xl font-semibold ml-auto">{date}</span>
          </div>
        </div>
        <form className="w-1/2 flex justify-center">
        <div className="w-full flex flex-col justify-center items-center">
            <img src={schoolLogo} alt="Logo" className="w-60 h-60 mb-6"/>
            <input type="text" className="w-2/4 p-2 mb-4 border rounded" placeholder="Enter Student Number"
            onChange={(e) => setStudentID(e.target.value)}
            />
            <button type='button' className="w-2/4 p-2 bg-blue-500 text-white rounded text-center" onClick={handleUserValidation}>
                Sign In
            </button>
            {isOpen && userData && ( 
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[400px] h-[400px] flex flex-col justify-between">
                      
                      {/* Header */}
                      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Hi {userData.lname}, {userData.fname}</h1>
              
                      {/* Warning Icon */}
                      <div className="flex justify-center">
                          <AlertTriangle className="text-yellow-500 w-20 h-20" />
                      </div>
              
                      {/* Message */}
                      <div className="flex-1 flex flex-col items-center justify-center px-2 text-center">
                          <p className="text-lg font-bold text-gray-900 mb-2">Are you sure this is you?</p>
                          <p className="text-gray-700 font-medium">
                              Unauthorized use of other accounts is <span className="font-bold text-red-600">STRICTLY PROHIBITED</span>. <br />
                              Note that all login attempts will be recorded. <br />
                              Press <span className="font-bold">Log In</span> to proceed.
                          </p>
                      </div>
              
                      {/* Buttons */}
                      <div className="flex justify-center gap-4">
                          <button className="flex-1 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300" onClick={handleSubmit}>
                              Log In
                          </button>
                          <button className="flex-1 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                              Cancel
                          </button>
                      </div>
                  </div>
              </div>
              
          
          
          )}
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
