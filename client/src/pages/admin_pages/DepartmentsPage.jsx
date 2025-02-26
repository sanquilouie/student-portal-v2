import { useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddDepartmentModal from "../../components/DepartmentRegistrationModal";

const DepartmentPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = (id) => {
        toast(
            (t) => (
                <div className=" rounded-lg bg-white relative max-w-sm mx-auto">
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                            Are you sure you want to delete this subject?
                        </h3>
                        <button
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                            onClick={() => {
                                console.log(`Deleted student with ID: ${id}`);
                                toast.dismiss(t.id);
                                // Call API to delete the student here
                            }}
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            ),
            { duration: Infinity }
        );
    };

    const [departments, setDepartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5;

    useEffect(() => {
        axios.get("http://localhost:3001/api/getdepartments") // Fetch from backend
            .then((response) => setDepartments(response.data))
            .catch((error) => console.error("Error fetching departments:", error));
    }, []);

    // Pagination logic
    const startIndex = (currentPage - 1) * entriesPerPage;
    const paginatedDepartments = departments.slice(startIndex, startIndex + entriesPerPage);

    const nextPage = () => {
        if (startIndex + entriesPerPage < departments.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search Code..." 
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">
                        Search
                    </button>
                </div>

                <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-500" onClick={() => setIsModalOpen(true)}>
                    Add New Department
                </button>
            </div>
            <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 w-32 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Department Code</th>
                        <th className="px-6 py-3 w-60 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Department Name</th>
                        <th className="px-6 py-3 w-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Dean</th>
                        <th className="px-6 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Contact Email</th>
                        <th className="px-6 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Contact Phone</th>
                        <th className="px-6 py-3 w-48 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedDepartments.map((department) => (
                        <tr key={department._id}>
                            <td className="px-6 py-4 w-16 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{department.department_code}</div>
                            </td>
                            <td className="px-6 py-4 w-80 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{department.department_name}</div>
                            </td>
                            <td className="px-6 py-4 w-16 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{department.dean}</div>
                            </td>
                            <td className="px-6 py-4 w-32 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{department.contact_email}</div>
                            </td>
                            <td className="px-6 py-4 w-24 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{department.contact_phone}</div>
                            </td>
                            <td className="px-6 py-4 w-48 whitespace-nowrap">
                                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">Edit</button>
                                <button
                                    className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
                                    onClick={() => handleDelete(department.department_code)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between mt-4">
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className={`px-4 py-2 font-medium text-white rounded-md ${currentPage === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"}`}
                >
                    Previous
                </button>
                <span className="text-gray-700">Page {currentPage}</span>
                <button 
                    onClick={nextPage} 
                    disabled={startIndex + entriesPerPage >= departments.length}
                    className={`px-4 py-2 font-medium text-white rounded-md ${startIndex + entriesPerPage >= departments.length ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"}`}
                >
                    Next
                </button>
            </div>
            <AddDepartmentModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            />
        </div>
        
    );
}

export default DepartmentPage