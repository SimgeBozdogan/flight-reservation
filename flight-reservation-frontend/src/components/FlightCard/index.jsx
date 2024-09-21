import React from 'react';
import './index.css';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <div>
          <span className="departure-time">{flight.departureTime}</span>
          <span className="airport">{flight.airportFrom}</span>
        </div>
        <div className="flight-details">
          <span>{flight.duration}</span>
          <span className="airline">{flight.airline}</span>
        </div>
        <div>
          <span className="arrival-time">{flight.arrivalTime}</span>
          <span className="airport">{flight.airportTo}</span>
        </div>
      </div>
      <div className="flight-price">
        <span>{flight.price}</span>
        <button>Book Flight</button>
        <button className="details-button">Check the details</button>
      </div>
    </div>
  );
};

export default FlightCard;