import React, { useState } from 'react';

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
      <div className="dropdown-header" onClick={toggleDropdown}>
        Select Projects
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div key={option} className="checkbox-option">
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
