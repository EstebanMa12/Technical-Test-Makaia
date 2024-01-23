import { useState } from 'react';

const DropdownCheckbox = ({ options, selectedOptions, onChange }: { options: string[], selectedOptions: string[], onChange: (options: string[]) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const handleOptionChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
    ? selectedOptions.filter((selectedOption: string) => selectedOption !== option)
      : [...selectedOptions, option];

    onChange(updatedOptions);
  };

  return (
    <div className="dropdown-checkbox">
      <div className="dropdown-header 
      block p-2 
      bg-gray-50 
      rounded-lg w-60
      text-sm text-gray-400
      border border-gray-300
      focus:ring-pink-500 focus:border-pink-500
      focus:text-pink-700 focus:font-bold
      active:border-pink-500 active:ring-pink-500 active:ring-2
      " 
      onClick={toggleDropdown}>
        Select Projects
      </div>
      {isOpen && (
        <div className="block p-2 ">
          {options.map((option) => (
            <div key={option} className="checkbox-option 
            gap-4
            flex flex-row
            ">
              <input
                type="checkbox"
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownCheckbox;

// Ejemplo de uso:
// const ExampleComponent = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleDropdownChange = (selectedOptions) => {
//     setSelectedOptions(selectedOptions);
//   };

//   return (
//     <div>
//       <DropdownCheckbox
//         options={options}
//         selectedOptions={selectedOptions}
//         onChange={handleDropdownChange}
//       />
//     </div>
//   );
// };

// export default ExampleComponent;
