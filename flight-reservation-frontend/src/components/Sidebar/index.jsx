import React from 'react';
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-item">
        <img src="/src/assets/Car-Rental.png" alt="Car Rentals" />
        <div>Car Rentals</div>
      </div>
      <div className="sidebar-item">
        <img src="/src/assets/Hotels.png" alt="Hotels" />
        <div>Hotels</div>
      </div>
      <div className="sidebar-item">
        <img src="/src/assets/TravelPackages.png" alt="Travel Packages" />
        <div>Travel Packages</div>
      </div>
    </aside>
  );
};

export default Sidebar;
