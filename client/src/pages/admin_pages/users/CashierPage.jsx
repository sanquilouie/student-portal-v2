import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FacultyPage = () => {
    const [cashiers, setCashier] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/getcashier") // Fetch from backend
            .then((response) => setCashier(response.data))
            .catch((error) => console.error("Error fetching cashier list:", error));
    }, []);

    const handleDelete = (id) => {
        toast(
            (t) => (
                <div className=" rounded-lg bg-white relative max-w-sm mx-auto">
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                            Are you sure you want to delete this user?
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

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cashier ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birthday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cashiers.map((cashier) => (
                        <tr key={cashier._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.cashierid}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.fname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.lname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.emailadd}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.birthday}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{cashier.address}</td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">Edit</button>
                                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
                                onClick={() => handleDelete(cashier.cashierid)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      )
}

export default FacultyPage
