//import { useState } from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [studentid, setID] = useState("")
    const [fname, setFirstName] = useState("")
    const [lname, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [emailadd, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")
    const [address, setAddress] = useState("")
    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:3001/students', {
            studentid, fname, lname, phone, emailadd, birthday, address, course, year, section 
        })
        .then(result => {
            console.log(result);
    
            // Show success toast notification
            toast.success("Student registered successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
    
            // Clear input fields
            setID("");
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setBirthday("");
            setAddress("");
            setCourse("");
            setYear("");
            setSection("");
        })
        .catch(err => {
            console.log(err);
            toast.error("Error registering student!");
        });
    };

    return (
        <div className="flex justify-center pt-20">
            <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="studentid" className="mb-3 block text-base font-medium text-[#07074D]">
                                Student ID
                            </label>
                            <input type="text" name="studentid" id="studentid" placeholder="Student ID" value={studentid}
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
                            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={fname}
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
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={lname}
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
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={phone}
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
                            <input type="email" name="email" id="email" placeholder="Enter your email" value={emailadd}
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
                            <input type="date" name="date" id="date" value={birthday}
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
                    <input type="text" name="address" id="address" placeholder="Full Address" value={address}
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
                            <input type="text" name="course" id="course" placeholder="Enter your course" value={course}
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
                            <input type="text" name="year" id="year" placeholder="Enter your year" value={year}
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
                            <input type="text" name="section" id="section" placeholder="Enter your section" value={section}
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