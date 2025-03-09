/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useModal } from "../../hooks/useModal";
import { Modal } from "./../ui/modal";
import Button from "./../ui/button/Button";
import Input from "./../form/input/InputField";
import Label from "./../form/Label";
import MultiSelect from "../../components/form/MultiSelect";
import Select from "../../components/form/Select";

interface Subject {
  _id: string;
  subjectcode: string;
  subjectname: string;
  units: number;
  semester: string;
  yearlevel: string;
  day: string[];  
  startTime: string;
  endTime: string;
  faculty: string;
}

interface SubjectEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject;
}

  interface Faculty {
    value: string;
    label: string;
  }
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const SubjectEditModal: React.FC<SubjectEditModalProps> = ({ isOpen, onClose, subject }) => {
    const [subjectcode, setSubjectCode] = useState(subject?.subjectcode || "");
    const [subjectname, setSubjectName] = useState(subject?.subjectname || "");
    const [units, setUnits] = useState(subject?.units.toString() || "");
    const [semester, setSemester] = useState(subject?.semester || "");
    const [yearlevel, setYearLevel] = useState(subject?.yearlevel || "");
    const [day, setDay] = useState<string[]>(subject.day || []);
    const [startTime, setStartTime] = useState(subject.startTime || "");
    const [endTime, setEndTime] = useState(subject.endTime || "");
    const [faculty, setFaculty] = useState(subject.faculty || "");

    const [selectedFaculty, setSelectedFaculty] = useState<Faculty[]>([]);

    useEffect(() => {
      if (subject) {
        setSubjectCode(subject.subjectcode);
        setSubjectName(subject.subjectname);
        setUnits(subject.units.toString());
        setSemester(subject.semester);
        setYearLevel(subject.yearlevel);
        setDay(subject.day || []);
        setStartTime(convertTo24HourFormat(subject.startTime) || "");
        setEndTime(convertTo24HourFormat(subject.endTime) || "");
        setFaculty(subject.faculty || "");
      }
    }, [subject]);

    useEffect(() => {
      // Fetch faculty data from backend
      const fetchFaculty = async () => {
        try {
          const response = await fetch("http://localhost:3001/api/getfaculty");
          const data = await response.json();
  
          // Convert response to dropdown format
          const formattedData = data.map((faculty: any) => ({
            value: faculty._id, // Use MongoDB _id as value
            label: `${faculty.fname} ${faculty.lname}`, // Display full name
          }));
  
          setSelectedFaculty(formattedData);
        } catch (error) {
          console.error("Error fetching faculty data:", error);
        }
      };
  
      fetchFaculty();
    }, []);

    const convertTo24HourFormat = (time?: string) => {
      if (!time) return ""; // Handle undefined values
    
      if (time.includes("AM") || time.includes("PM")) {
        // Convert from 12-hour format to 24-hour format
        const [timePart, modifier] = time.split(" ");
        let [hours, minutes] = timePart.split(":").map(Number);
    
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
    
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
      }
    
      return time; // Already in 24-hour format
    };

    const convertTo12HourFormat = (time: string) => {
      let [hours, minutes] = time.split(":").map(Number);
      const modifier = hours >= 12 ? "PM" : "AM";
    
      if (hours > 12) hours -= 12;
      if (hours === 0) hours = 12;
    
      return `${hours}:${String(minutes).padStart(2, "0")} ${modifier}`;
    };
    
      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const formattedStartTime = convertTo12HourFormat(startTime);
        const formattedEndTime = convertTo12HourFormat(endTime);

        try {
          await axios.put(`http://localhost:3001/api/updatesubject/${subject?._id}`, {
            subjectcode,
            subjectname,
            units,
            semester,
            yearlevel,
            day,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            faculty
          });
    
          toast.success("Subject updated successfully!");
          onClose();
        } catch (error) {
          console.error("Error updating subject:", error);
          toast.error("Failed to update subject.");
        }
      };
    
      if (!isOpen || !subject) return null;
    
    const multiOptions = [
        { value: "Monday", text: "Monday", selected: false },
        { value: "Tuesday", text: "Tuesday", selected: false },
        { value: "Wednesday", text: "Wednesday", selected: false },
        { value: "Thursday", text: "Thursday", selected: false },
        { value: "Friday", text: "Friday", selected: false },
        { value: "Saturday", text: "Saturday", selected: false },
        { value: "Sunday", text: "Sunday", selected: false },
      ];

    if (!isOpen) return null; // Hide modal if not open

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add New Subject
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Enter the subject details to register a new course.
            </p>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="mt-2">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>
                <div className="grid grid-cols-12 gap-x-6 gap-y-5">
                    {/* Subject Code (30%) and Subject Name (70%) */}
                    <div className="col-span-4">
                        <Label>Subject Code</Label>
                        <Input type="text" value={subjectcode} onChange={(e) => setSubjectCode(e.target.value)} />
                    </div>
                    <div className="col-span-8">
                        <Label>Subject Name</Label>
                        <Input type="text" value={subjectname} onChange={(e) => setSubjectName(e.target.value)} />
                    </div>

                    {/* Units, Semester, Year Level (Each 33%) */}
                    <div className="col-span-4 md:col-span-4">
                        <Label>Units</Label>
                        <Input type="text" value={units} onChange={(e) => setUnits(e.target.value)} />
                    </div>
                    <div className="col-span-4 md:col-span-4">
                        <Label>Semester</Label>
                        <Input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
                    </div>
                    <div className="col-span-4 md:col-span-4">
                        <Label>Year Level</Label>
                        <Input type="text" value={yearlevel} onChange={(e) => setYearLevel(e.target.value)} />
                    </div>

                    <div className="col-span-12">
                        <MultiSelect
                            label="Select"
                            options={multiOptions}
                            defaultSelected={day}
                            onChange={(values) => setDay(values)}
                        />
                        <p className="sr-only">
                            Selected Values: {day.join(", ")}
                        </p>
                    </div>
                    <div className="col-span-6 md:col-span-6">
                        <Label>Start Time</Label>
                        <Input type="time" value={startTime || ""} onChange={(e) => setStartTime(e.target.value)} />
                    </div>
                    <div className="col-span-6 md:col-span-6">
                        <Label>End Time</Label>
                        <Input type="time" value={endTime || ""} onChange={(e) => setEndTime(e.target.value)} />
                    </div>

                    <div className="col-span-12">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Teacher
                        </label>
                        <Select options={selectedFaculty} onChange={setFaculty} />
                        <p className="mt-2 text-sm text-gray-500">
                            Selected Teacher ID: {faculty}
                        </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button size="sm" type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
};

export default SubjectEditModal;
