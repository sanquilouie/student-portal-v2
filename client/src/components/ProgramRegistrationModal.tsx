/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ProgramRegistrationModalProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  
  const ProgramRegistrationModal: React.FC<ProgramRegistrationModalProps> = ({ isOpen, onClose }) => {
    const [program_code, setProgramCode] = useState("");
    const [program_name, setProgramName] = useState("");
    const [duration_years, setDurationYears] = useState("");
    const [total_units, setTotalUnits] = useState("");
    const [department_code, setDepartmentCode] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:3001/post_programs', {program_code, program_name, duration_years, total_units, department_code
        })
            .then(result => {
                console.log(result);
        
                toast.success("Program Registered Successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
        
                setProgramCode("");
                setProgramName("");
                setDurationYears("");
                setTotalUnits("");
                setDepartmentCode("");
            })
            .catch(err => {
                console.log(err);
                toast.error("Error Registering Program!");
                    });
    };

    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Program</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Program Code</label>
                            <input type="text" placeholder="Subject Code" value={program_code}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setProgramCode(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-2/3">
                            <label className="block text-base font-medium text-gray-700">Program Name</label>
                            <input type="text" placeholder="Subject Name" value={program_name}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setProgramName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="-mx-3 flex flex-wrap mt-4">
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Duration Years</label>
                            <input type="text" placeholder="Units" value={duration_years}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setDurationYears(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Total Units</label>
                            <input type="text" placeholder="Units" value={total_units}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setTotalUnits(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <label className="block text-base font-medium text-gray-700">Department Code</label>
                            <input type="text" placeholder="Units" value={department_code}
                                className="w-full rounded-md border p-2 text-gray-700 focus:border-blue-500 focus:ring"
                                onChange={(e) => setDepartmentCode(e.target.value)}
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
};

export default ProgramRegistrationModal;
