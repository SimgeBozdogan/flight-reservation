import React from 'react';
import './index.css';

const FlightSearch = () => {
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
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" />
        <input type="date" />
      </div>
      <button id="show-flights">Show Flights</button>
    </div>
  );
};

export default FlightSearch;