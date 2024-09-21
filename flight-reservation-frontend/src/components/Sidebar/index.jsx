import React from 'react';
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-item">
        <img src="car-rental.png" alt="Car Rentals" />
        <div>Car Rentals</div>
      </div>
      <div className="sidebar-item">
        <img src="hotels.png" alt="Hotels" />
        <div>Hotels</div>
      </div>
      <div className="sidebar-item">
        <img src="travel-packages.png" alt="Travel Packages" />
        <div>Travel Packages</div>
      </div>
    </aside>
  );
};

export default Sidebar;
