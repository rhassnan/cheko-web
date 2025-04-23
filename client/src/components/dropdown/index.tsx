import  { useState } from 'react';
import './styles.css';

interface DropdownProps {
  label?: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedCategory: string | null;
}

export default function Dropdown({ label = "Select", options, onSelect, selectedCategory }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const displayLabel = selectedCategory || label;

  const handleSelect = (option: string) => {
    // setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {displayLabel}
        {/* <span className="arrow">{isOpen ? '▲' : '▼'}</span> */}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((opt, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
