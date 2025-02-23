import { useState, useEffect } from "react";
import axios from "axios";

const StudentProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('http://localhost:3001/studentprofile', { withCredentials: true })
        .then((response) => {
          
          setUserData(response.data);
          setLoading(false);  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);  
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;  
    }

  return (
    <div className="flex items-center justify-center p-20">
    <div className="mx-auto w-4/5">
        <form>
        <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label htmlFor="studentid" className="mb-3 block text-base font-medium text-[#07074D]">
                        Student ID
                    </label>
                    <input type="text" name="studentid" id="studentid" placeholder="Student ID" value={userData.studentid}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                        Full Name
                    </label>
                    <input type="text" name="name" id="name" placeholder="Full Name" value={userData.fname + " " + userData.lname}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
        </div>
        <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                        Phone Number
                    </label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={userData.phone}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                        Email Address
                    </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" value={userData.emailadd}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                        Birth Date
                    </label>
                    <input type="text" name="date" id="date" placeholder="Birtdate" value={userData.birthday}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
        </div>
        <div className="mb-5">
            <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
                 Full Address
            </label>
            <input type="text" name="address" id="address" placeholder="Full Address" value={userData.address}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
        </div>
        <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="course" className="mb-3 block text-base font-medium text-[#07074D]">
                        Course
                    </label>
                    <input type="text" name="course" id="course" placeholder="Enter your course" value={userData.course}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="year" className="mb-3 block text-base font-medium text-[#07074D]">
                        Year
                    </label>
                    <input type="text" name="year" id="year" placeholder="Enter your year" value={userData.year}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                    <label htmlFor="section" className="mb-3 block text-base font-medium text-[#07074D]">
                        Section
                    </label>
                    <input type="text" name="section" id="section" placeholder="Enter your section" value={userData.section}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" readOnly/>
                </div>
            </div>
        </div>
        </form>
    </div>
</div>
  )
}

export default StudentProfilePage