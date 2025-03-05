import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddDepartmentModal from "../../../components/DepartmentRegistrationModal";

interface Department {
    _id: string;
    department_code: string;
    department_name: string;
    dean: string;
    contact_email: string;
    contact_phone: string;
  }

export default function BasicTableOne() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  useEffect(() => {
    axios.get("http://localhost:3001/api/getdepartments") // Fetch from backend
        .then((response) => setDepartments(response.data))
        .catch((error) => console.error("Error fetching departments:", error));
}, []);

   // Pagination logic
   const totalPages = Math.ceil(departments.length / entriesPerPage);
   const startIndex = (currentPage - 1) * entriesPerPage;
   const paginatedSubjects = departments.slice(startIndex, startIndex + entriesPerPage);

   const nextPage = () => {
       if (currentPage < totalPages) setCurrentPage(currentPage + 1);
   };

   const prevPage = () => {
       if (currentPage > 1) setCurrentPage(currentPage - 1);
   };

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
                Are you sure you want to delete this subject?
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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Department Code
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Department Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Dean
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Contact Email
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Contact Phone
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {paginatedSubjects.map((subject) => (
                <TableRow key={subject._id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {subject.department_code}
                        </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {subject.department_name}
                  </TableCell>  
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {subject.dean}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {subject.contact_email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {subject.contact_phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
       {/* Pagination Controls */}
       <div className="flex justify-between items-center p-4">
              <button
                  className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={prevPage}
                  disabled={currentPage === 1}
              >
                  Previous
              </button>
              <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
              <button
                  className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
              >
                  Next
              </button>
          </div>
    </div>
  );
}
