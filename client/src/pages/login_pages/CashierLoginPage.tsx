import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/images/bg-image.jpg';
import schoolLogo from '../../assets/images/school-logo.png';
import { useState, useEffect } from "react";
import axios from 'axios';

const CashierLoginPage = () => {
  const [userid, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post<{ status: string }>(
        'http://localhost:3001/cashier_login', 
        { userid, password }, 
        { withCredentials: true }
    )
    .then(result => {
        console.log(result.data);
        if (result.data.status === "Success") {
            navigate('/cashier/dashboard');
        } else {
            alert(result.data.status);
        }
    })
    .catch(err => console.log(err));
};

  
  // Function to update time and date
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const updateTime = () => {
    const now = new Date();
    
    const padStart = (num: number) => num < 10 ? `0${num}` : `${num}`;

    const hours: string = padStart(now.getHours());
    const minutes: string = padStart(now.getMinutes());
    const seconds: string = padStart(now.getSeconds());
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
            <span className="text-6xl font-bold">Student Information System(Cashier)</span>
        </div>
      </div>

      <div className="h-[80%] flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-start pl-6">
            <span className="text-black text-9xl font-bold">{time}</span>
            <span className="text-black text-3xl font-semibold ml-auto">{date}</span>
          </div>
        </div>
        <form className="w-1/2 flex justify-center" onClick={handleSubmit}>
        <div className="w-full flex flex-col justify-center items-center">
            <img src={schoolLogo} alt="Logo" className="w-60 h-60 mb-6"/>
            <input type="text" className="w-2/4 p-2 mb-4 border rounded" placeholder="Enter Faculty ID"
            onChange={(e) => setUserID(e.target.value)}
            />
            <input type="password" className="w-2/4 p-2 mb-4 border rounded" placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' className="w-2/4 p-2 bg-blue-500 text-white rounded text-center" >
                Sign In
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CashierLoginPage;
