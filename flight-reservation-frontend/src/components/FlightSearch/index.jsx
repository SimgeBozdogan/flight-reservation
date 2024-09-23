// src/components/FlightSearch/index.jsx
import React, { useEffect } from 'react';
import './index.css';

const FlightSearch = () => {
  useEffect(() => {
    // Date input alanlarına placeholder'ı gizlemek için odaklanınca placeholder'ı kaldır
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      input.placeholder = ''; // Başlangıçta placeholder'ı boş bırak
      input.addEventListener('focus', () => {
        input.placeholder = ''; // Focus olduğunda placeholder'ı boş bırak
      });
    });
  }, []);

  return (
    <div className="flight-search">
      <h2>Book Your Flight</h2>
      <div className="trip-type-container">
        <div className="trip-type">
          <button className="active">Round Trip</button>
          <button>One Way</button>
        </div>
      </div>
      <div className="search-bar">
        <div className="input-wrapper">
          <span className="input-icon">✈️</span>
          <input type="text" placeholder="From" />
        </div>
        <div className="input-wrapper">
          <span className="input-icon">🏙️</span>
          <input type="text" placeholder="To" />
        </div>
        <div className="input-wrapper">
          <span className="input-icon">📅</span>
          <input type="date" placeholder="" /> {/* Placeholder boş bırakıldı */}
        </div>
        <div className="input-wrapper">
          <span className="input-icon">📅</span>
          <input type="date" placeholder="" /> {/* Placeholder boş bırakıldı */}
        </div>
      </div>
      <button id="show-flights">Show Flights</button>
    </div>
  );
};

export default FlightSearch;
