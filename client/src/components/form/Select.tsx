import { useState } from "react";
import { Combobox } from "@headlessui/react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Search and select...",
  onChange,
  className = "",
  defaultValue = "",
}) => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((opt) => opt.value === defaultValue) || null
  );

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (option: Option | null) => {
    if (!option) return; // Prevent null reference error
    setSelectedOption(option);
    onChange(option.value);
  };
        

  return (
    <Combobox value={selectedOption} onChange={handleSelect}>
      <div className={`relative w-full ${className}`}>
        {/* Input Field */}
        <Combobox.Input
          className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          placeholder={placeholder}
          displayValue={(option: Option) => option?.label}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Options Dropdown */}
        {filteredOptions.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active
                      ? "bg-brand-500 text-white"
                      : "text-gray-900 dark:text-gray-100"
                  }`
                }
              >
                {option.label}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default Select;
