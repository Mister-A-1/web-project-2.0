import React from 'react';
import '../styles/Dropdown.css';

function Dropdown({ label, items }) {
  return (
    <div className="dropdown">
      <a href="#" className="dropbtn">{label}</a>
      <div className="dropdown-content">
        {items.map(item => (
          <a href="/" key={item}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
