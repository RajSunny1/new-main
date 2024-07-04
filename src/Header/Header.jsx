import React, { useState } from 'react';
import './Header.css'; // Ensure to create a CSS file for styling
import logoImage from './image 1.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'; // Import menu icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {/* Menu toggle button for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="nav-list">
          <li>Find Suppliers</li>
          <li>Find Service Tags <FontAwesomeIcon icon={faCircleChevronDown} /></li>
          <li>
            <button className="login-button">Login / Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
