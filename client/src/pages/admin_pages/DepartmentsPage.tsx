import { useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BasicTableOne from "./tables/DepartmentsPageTable";
import AddDepartmentModal from "../../components/DepartmentRegistrationModal";


const DepartmentsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = (id: string) => {
        const toastId = toast(
          ({ closeToast }) => (
            <div className="rounded-lg bg-white relative max-w-sm mx-auto">
              <div className="p-6 pt-0 text-center">
                <svg
                  className="w-20 h-20 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                  Are you sure you want to delete this department?
                </h3>
                <button
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                  onClick={() => {
                    console.log(`Deleted student with ID: ${id}`);
                    toast.dismiss(toastId);
                    // Call API to delete the student here
                  }}
                >
                  Yes, I'm sure
                </button>
                <button
                  className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                  onClick={() => toast.dismiss(toastId)}
                >
                  No, cancel
                </button>
              </div>
            </div>
          ),
          { autoClose: false }
        );
      };
    

    return (
        <div>
            <PageBreadcrumb pageTitle="Departments View" />
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
            <div className="space-y-6">
                <BasicTableOne />
            </div>
            <AddDepartmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>  
    );
}

export default DepartmentsPage

