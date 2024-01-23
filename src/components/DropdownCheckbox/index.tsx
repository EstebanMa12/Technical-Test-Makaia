import { useState } from 'react';

const DropdownCheckbox = ({ options, onChange }: { options: string[], onChange: (options: string[]) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption: string) => selectedOption !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className="relative">
      <div
        className="dropdown-header block p-2 bg-gray-50 rounded-lg w-60 text-sm text-gray-400 border border-gray-300 focus:ring-pink-500 focus:border-pink-500 focus:text-pink-700 focus:font-bold active:border-pink-500 active:ring-pink-500 active:ring-2"
        onClick={toggleDropdown}
      >
        Select Projects
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 block p-2 shadow-md bg-white w-60">
          {options.map((option) => (
            <div key={option} className="checkbox-option gap-4 flex flex-row">
              <input
                type="checkbox"
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label
                htmlFor={option}
                className={`cursor-pointer ${
                  selectedOptions.includes(option)
                    ? 'text-pink-700 font-bold'
                    : 'text-gray-700'
                }`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownCheckbox;


