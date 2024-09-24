import React from 'react';
import './index.css';

const FlightCard = ({ flight }) => {
  // Burada tarih ve saat formatlarını düzenleniyor
  const estimatedLandingTime = flight.estimatedLandingTime ? new Date(flight.estimatedLandingTime).toLocaleTimeString() : 'N/A';
  const actualLandingTime = flight.actualLandingTime ? new Date(flight.actualLandingTime).toLocaleTimeString() : 'N/A';

  return (
    <div className="flight-card">
      <div className="flight-info">
        <div className="flight-time">{estimatedLandingTime}</div>
        <div className="flight-details">
          <div className="airline-name">{flight.airlineCode || 'N/A'}</div>
          <div className="flight-route">
            {flight.route && flight.route.destinations ? flight.route.destinations.join(', ') : 'N/A'}
          </div>
          <div className="flight-number">{flight.flightName || 'N/A'}</div>
        </div>
        <div className="flight-destination">
          {flight.route && flight.route.destinations && flight.route.destinations.length > 1 
            ? `${flight.route.destinations[0]} to ${flight.route.destinations[1]}`
            : 'N/A'}
        </div>
        <a href="#" className="flight-details-link">Flight Details</a>
      </div>
      <div className="flight-prices">
        <div className="no-prices">No prices available</div>
      </div>
    </div>
  );
};

export default FlightCard;
