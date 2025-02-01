//import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [studentid, setID] = useState()
    const [fname, setFirstName] = useState()
    const [lname, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [emailadd, setEmail] = useState()
    const [birthday, setBirthday] = useState()
    const [address, setAddress] = useState()
    const [course, setCourse] = useState()
    const [year, setYear] = useState()
    const [section, setSection] = useState()
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/students', {studentid, fname, lname, phone, emailadd,
                                               birthday, address, course, year, section 
        })
            .then(result => {console.log(result)
                navigate('/')
            })
            .catch(err=> console.log(err)) 
    }

    return (
        <div className="flex items-center justify-center p-20">
            <div className="mx-auto w-4/5">
                <form onSubmit={handleSubmit}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="studentid" className="mb-3 block text-base font-medium text-[#07074D]">
                                Student ID
                            </label>
                            <input type="text" name="studentid" id="studentid" placeholder="Student ID"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setID(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="firstname" className="mb-3 block text-base font-medium text-[#07074D]">
                                First Name
                            </label>
                            <input type="text" name="firstname" id="firstname" placeholder="First Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="lastname" className="mb-3 block text-base font-medium text-[#07074D]">
                                Last Name
                            </label>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setLastName(e.target.value)}
                                />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setPhone(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                Birth Date
                            </label>
                            <input type="date" name="date" id="date"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setBirthday(e.target.value)}
                                />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
                        Full Address
                    </label>
                    <input type="text" name="address" id="address" placeholder="Full Address"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                        onChange={(e) => setAddress(e.target.value)}
                        />
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="course" className="mb-3 block text-base font-medium text-[#07074D]">
                                Course
                            </label>
                            <input type="text" name="course" id="course" placeholder="Enter your course"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setCourse(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="year" className="mb-3 block text-base font-medium text-[#07074D]">
                                Year
                            </label>
                            <input type="text" name="year" id="year" placeholder="Enter your year"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setYear(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="section" className="mb-3 block text-base font-medium text-[#07074D]">
                                Section
                            </label>
                            <input type="text" name="section" id="section" placeholder="Enter your section"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setSection(e.target.value)}
                                />
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Register
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;