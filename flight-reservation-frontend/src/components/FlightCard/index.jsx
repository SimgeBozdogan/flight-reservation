import React from 'react';
import './index.css';

const FlightCard = ({ flight }) => {
  // flight veya flight.prices undefined ise boş bir dizi olarak varsay.
  const prices = flight?.prices || [];

  return (
    <div className="flight-card">
      <div className="flight-info">
        <div className="flight-time">{flight.time || 'N/A'}</div>
        <div className="flight-details">
          <div className="airline-name">{flight.airline || 'N/A'}</div>
          <div className="flight-route">{flight.flightType || 'N/A'}</div>
          <div className="flight-number">{flight.flightNumber || 'N/A'}</div>
        </div>
        <div className="flight-destination">
          {flight.airportFrom || 'N/A'} to {flight.airportTo || 'N/A'}
        </div>
        <a href="#" className="flight-details-link">Flight Details</a>
      </div>
      <div className="flight-prices">
        {prices.length > 0 ? (
          prices.map((price, index) => (
            <div key={index} className="price-box">
              <div className="price">{price.price || 'N/A'}</div>
              <div className="price-type">{price.type || 'N/A'}</div>
            </div>
          ))
        ) : (
          <div className="no-prices">No prices available</div>
        )}
      </div>
    </div>
  );
};

export default FlightCard;
