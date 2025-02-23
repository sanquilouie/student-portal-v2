/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DepartmentRegistrationModal({ isOpen, onClose }) {
    const [department_code, setDepartmentCode] = useState("");
    const [department_name, setDepartmentName] = useState("");
    const [dean, setDean] = useState("");
    const [contact_email, setContactEmail] = useState("");
    const [contact_phone, setContactPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/post_departments', {department_code, department_name, dean, contact_email, contact_phone
        })
            .then(result => {
                console.log(result);
        
                toast.success("Department Registered Successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
        
                setDepartmentCode("");
                setDepartmentName("");
                setDean("");
                setContactEmail("");
                setContactPhone("");
            })
            .catch(err => {
                console.log(err);
                toast.error("Error Registering Department!");
                    });
    };

    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Department</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/4">
                            <label className="block text-base font-medium text-gray-700">Dept Code</label>
                            <input type="text" placeholder="Dept Code" value={department_code}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setDepartmentCode(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-3/4">
                            <label className="block text-base font-medium text-gray-700">Dean</label>
                            <input type="text" placeholder="Dean" value={dean}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setDean(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full pt-3">
                            <label className="block text-base font-medium text-gray-700">Department Name</label>
                            <input type="text" placeholder="Department Name" value={department_name}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setDepartmentName(e.target.value)}
                            />  
                    </div>

                    <div className="-mx-3 flex flex-wrap mt-4">
                        <div className="w-full px-3 sm:w-1/2">
                            <label className="block text-base font-medium text-gray-700">Contact Email</label>
                            <input type="text" placeholder="Contact Email" value={contact_email}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <label className="block text-base font-medium text-gray-700">Contact Phone</label>
                            <input type="text" placeholder="Contact Phone" value={contact_phone}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button type="button" 
                            className="px-4 py-2 bg-gray-400 text-white rounded-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" 
                            className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
