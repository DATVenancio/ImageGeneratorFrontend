import React, { useState } from 'react';
import './styles/language_dropdown.css';
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const [t, i18n] = useTranslation("global");

  const items = [
    { label: 'ENGLISH', image: 'usa.png', value: "en" },
    { label: 'PORTUGUÊS', image: 'brazil.png', value: "pt" },
    { label: 'FRANÇAIS', image: 'france.png', value: "fr" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    i18n.changeLanguage(item.value);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
          <img src={`../${selectedItem.image}`} className="dropdown-item-image" />
          {selectedItem.label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.label} onClick={() => handleItemClick(item)} className="dropdown-item">
              <img src={`../${item.image}`} className="dropdown-item-image" />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
