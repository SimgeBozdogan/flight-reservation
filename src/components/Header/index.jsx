import React from 'react';
import { FaTags, FaPlane, FaGlobe, FaUser } from 'react-icons/fa';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaPlane className="logo-icon" /> 
        <span className="logo-text">Plane Scape</span>
      </div>
      <nav>
        <ul>
          <li><FaTags className="logo-icon" /> Deals</li>
          <li><FaGlobe className="logo-icon" /> Discover</li>
          <li><FaUser className="logo-icon" /> Joane Smith</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
