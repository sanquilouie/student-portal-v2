/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SubjectRegistrationModal({ isOpen, onClose }) {
    const [subjectcode, setSubjectCode] = useState("");
    const [subjectname, setSubjectName] = useState("");
    const [units, setUnits] = useState("");
    const [semester, setSemester] = useState("");
    const [yearlevel, setYearLevel] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/post_subjects', {subjectcode, subjectname, units, semester, yearlevel
        })
            .then(result => {
                console.log(result);
        
                toast.success("Subject Registered Successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
        
                setSubjectCode("");
                setSubjectName("");
                setUnits("");
                setSemester("");
                setYearLevel("");
            })
            .catch(err => {
                console.log(err);
                toast.error("Error Registering Subject!");
                    });
    };

    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Subject</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Subject Code</label>
                            <input type="text" placeholder="Subject Code" value={subjectcode}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setSubjectCode(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-2/3">
                            <label className="block text-base font-medium text-gray-700">Subject Name</label>
                            <input type="text" placeholder="Subject Name" value={subjectname}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setSubjectName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="-mx-3 flex flex-wrap mt-4">
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Units</label>
                            <input type="text" placeholder="Units" value={units}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setUnits(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Semester</label>
                            <select value={semester} 
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setSemester(e.target.value)}
                            >
                                <option value="" disabled>Select Semester</option>
                                <option value="1st Semester">1st Semester</option>
                                <option value="2nd Semester">2nd Semester</option>
                            </select>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Year Level</label>
                            <select value={yearlevel} 
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setYearLevel(e.target.value)}
                            >
                                <option value="" disabled>Select Year Level</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
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
