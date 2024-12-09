import React from 'react';
import '../styles/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dropdown from './Dropdown.jsx';
import imag1 from '../assets/img1.JPG';

function Header() {
  return (
    <div className="header">
      <img src={imag1} alt="Image 1" />
      <a href="/" className="nav-link">HOME</a>
      <Dropdown label="Shop" items={['Playstation', 'Xbox', 'Nintendo']} />
      <Dropdown label="Brands" items={['Logitech', 'Razer', 'Apple']} />

      <a href="/" className="nav-link">Contact Us</a>

      <button className="btn btn-outline-primary d-flex align-items-center">
        <i className="bi bi-search me-2"></i> Search
      </button>

      <button className="btn btn-outline-danger d-flex align-items-center">
        <i className="bi bi-person me-2"></i> User
      </button>

      <button className="btn btn-outline-success d-flex align-items-center">
        <i className="bi bi-cart me-2"></i> Cart
      </button>
    </div>
  );
}

export default Header;