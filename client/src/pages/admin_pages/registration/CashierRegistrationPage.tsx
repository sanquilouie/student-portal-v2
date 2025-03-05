//import { useState } from "react";
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

function Signup() {
    const [cashierid, setID] = useState<string>("");
    const [fname, setFirstName] = useState<string>("");
    const [lname, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [emailadd, setEmail] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        axios.post('http://localhost:3001/cashier', {
            cashierid,
            fname,
            lname,
            phone,
            emailadd,
            birthday,
            address,
            password
        })
        .then((result) => {
            console.log(result);
    
            // Show success toast notification
            toast.success("Cashier registered successfully!", {
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
            setPassword("");
        })
        .catch((err) => {
            console.error(err);
            toast.error("Error registering cashier!");
        });
    };
    

    return (
        <>
        <PageBreadcrumb pageTitle="Cashier Registration" />
        <div className="flex justify-center pt-20">
            <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="cashierid" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
                                Cashier ID
                            </label>
                            <input type="text" name="cashierid" id="cashierid" placeholder="Cashier ID" value={cashierid}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setID(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="firstname" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
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
                            <label htmlFor="lastname" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
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
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
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
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
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
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
                                Birth Date
                            </label>
                            <input type="date" name="date" id="date" value={birthday}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setBirthday(e.target.value)}
                                />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="address" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
                                Full Address
                            </label>
                            <input type="text" name="address" id="address" placeholder="Full Address" value={address}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setAddress(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="password" className="mb-3 block text-base font-medium text-gray-800 dark:text-white/90">
                                Password
                            </label>
                            <input type="text" name="password" id="password" placeholder="Password" value={password}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setPassword(e.target.value)}
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
        </>
    );
}

export default Signup;