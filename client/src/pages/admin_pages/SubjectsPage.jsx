import { useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubjectsPage = () => {
    const [subjectcode, setSubjectCode] = useState()
    const [units, setUnits] = useState()
    const [semester, setSemester] = useState()
    const [yearlevel, setYearLevel] = useState()
    const [subjectname, setSubjectName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
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
    }

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

    const [subjects, setSubjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 5;

    useEffect(() => {
        axios.get("http://localhost:3001/api/getsubjects") // Fetch from backend
            .then((response) => setSubjects(response.data))
            .catch((error) => console.error("Error fetching subjects:", error));
    }, []);

    // Pagination logic
    const startIndex = (currentPage - 1) * entriesPerPage;
    const paginatedSubjects = subjects.slice(startIndex, startIndex + entriesPerPage);

    const nextPage = () => {
        if (startIndex + entriesPerPage < subjects.length) {
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
            <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 w-32 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Subject Code</th>
                        <th className="px-6 py-3 w-60 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Subject Name</th>
                        <th className="px-6 py-3 w-16 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Units</th>
                        <th className="px-6 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Semester</th>
                        <th className="px-6 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Year Level</th>
                        <th className="px-6 py-3 w-48 text-left text-xs font-medium text-gray-500 uppercase tracking-wider overflow-hidden text-ellipsis">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedSubjects.map((subject) => (
                        <tr key={subject._id}>
                            <td className="px-6 py-4 w-16 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{subject.subjectcode}</div>
                            </td>
                            <td className="px-6 py-4 w-80 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{subject.subjectname}</div>
                            </td>
                            <td className="px-6 py-4 w-16 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{subject.units}</div>
                            </td>
                            <td className="px-6 py-4 w-32 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{subject.semester}</div>
                            </td>
                            <td className="px-6 py-4 w-24 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="max-w-0">{subject.yearlevel}</div>
                            </td>
                            <td className="px-6 py-4 w-48 whitespace-nowrap">
                                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">Edit</button>
                                <button
                                    className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
                                    onClick={() => handleDelete(subject.subjectcode)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
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
                    disabled={startIndex + entriesPerPage >= subjects.length}
                    className={`px-4 py-2 font-medium text-white rounded-md ${startIndex + entriesPerPage >= subjects.length ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"}`}
                >
                    Next
                </button>
            </div>
        </div>
        /*** <div className="flex justify-center pt-20">
            <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="code" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Subject Code
                            </label>
                            <input type="text" name="code" id="code" placeholder="Subject Code" value={subjectcode}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setSubjectCode(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-2/3">
                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Subject Name
                        </label>
                        <input type="text" name="name" id="name" placeholder="Subject Name" value={subjectname}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            onChange={(e) => setSubjectName(e.target.value)}
                            />
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="units" className="mb-3 block text-base font-medium text-[#07074D]">
                                Units
                            </label>
                            <input type="text" name="units" id="units" placeholder="Units" value={units}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                onChange={(e) => setUnits(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="semester" className="mb-3 block text-base font-medium text-[#07074D]">
                                Semester
                            </label>
                            <select 
                                name="role" 
                                id="role" 
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                            >
                                <option value="" disabled>Select Semester</option>
                                <option value="1st Semester">1st Semester</option>
                                <option value="2nd Semester">2nd Semester</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/3">
                        <div className="mb-5">
                            <label htmlFor="yearlevel" className="mb-3 block text-base font-medium text-[#07074D]">
                                Year Level
                            </label>
                            <select 
                                name="role" 
                                id="role" 
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={yearlevel}
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
                </div>
                <div>
                    <button
                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        Register
                    </button>
                </div>
                </form>
            </div>
        </div> ***/
    );
}

export default SubjectsPage