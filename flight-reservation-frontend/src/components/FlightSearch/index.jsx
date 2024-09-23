// src/components/FlightSearch/index.jsx
import React, { useEffect, useState } from 'react';
import { FaPlaneDeparture, FaCity, FaCalendarAlt } from 'react-icons/fa';
import './index.css';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('Round Trip');

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

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleShowFlights = () => {
    // Show Flights butonuna tıklanınca yapılacak işlemler burada tanımlanır
    console.log(`Showing flights for ${tripType}`);
    // İlgili arama işlemlerini burada gerçekleştirebilirsin.
  };

  return (
    <div className="flight-search">
      <h2>Book Your Flight</h2>
      <div className="trip-type-container">
        <div className="trip-type">
          <button 
            className={tripType === 'Round Trip' ? 'active' : ''} 
            onClick={() => handleTripTypeChange('Round Trip')}
          >
            Round Trip
          </button>
          <button 
            className={tripType === 'One Way' ? 'active' : ''} 
            onClick={() => handleTripTypeChange('One Way')}
          >
            One Way
          </button>
        </div>
      </div>
      <div className="search-bar">
        <div className="input-wrapper">
          <span className="input-icon"><FaPlaneDeparture /></span>
          <input type="text" placeholder="From" />
        </div>
        <div className="input-wrapper">
          <span className="input-icon"><FaCity /></span>
          <input type="text" placeholder="To" />
        </div>
        <div className="input-wrapper">
          <span className="input-icon"><FaCalendarAlt /></span>
          <input type="date" placeholder="" /> {/* Placeholder boş bırakıldı */}
        </div>
        <div className="input-wrapper">
          <span className="input-icon"><FaCalendarAlt /></span>
          <input type="date" placeholder="" /> {/* Placeholder boş bırakıldı */}
        </div>
      </div>
      <button id="show-flights" onClick={handleShowFlights}>
        Show Flights
      </button>
    </div>
  );
};

export default FlightSearch;
