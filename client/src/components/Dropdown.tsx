/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type DropdownProps = {
  label: string;
  items: string[]; // Assuming items is an array of strings
};

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };  

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 min-w-[160px] flex items-center justify-between"
      >
        {selected}
        <ChevronDownIcon className="w-5 h-5 ml-2" /> {/* Down Arrow */}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-[160px] bg-white shadow-lg rounded-md border border-gray-200">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
