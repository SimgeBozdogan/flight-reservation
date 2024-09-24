import React from 'react';
import './index.css';

const FlightCard = ({ flight }) => {
  const estimatedLandingTime = new Date(flight.estimatedLandingTime).toLocaleTimeString();

  return (
    <div className="flight-card">
      <div className="flight-info">
        <div className="flight-time">{estimatedLandingTime || 'N/A'}</div>
        <div className="flight-details">
          <div className="airline-name">{flight.airlineCode || 'N/A'}</div>
          <div className="flight-route">{flight.route.destinations.join(', ') || 'N/A'}</div>
          <div className="flight-number">{flight.flightName || 'N/A'}</div>
        </div>
        <div className="flight-destination">
          {flight.route.destinations[0] || 'N/A'} to {flight.route.destinations[1] || 'N/A'}
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