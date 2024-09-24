import React from "react";
import "./index.css";

const FlightInfoBox = ({ flight }) => {
  return (
    <div className="flight-info-box">
      <div className="flight-info">
        <p className="flight-time">{flight.time}</p>
        <p className="flight-airline">{flight.airline}</p>
        <p className="flight-type">{flight.flightType}</p>
        <p className="flight-route">{flight.route}</p>
        <p className="flight-number">{flight.flightNumber}</p>
      </div>
      <div className="flight-prices">
        {flight.prices.map((price, index) => (
          <div key={index} className="price-box">
            <p className="price-type">{price.type}</p>
            <p className="price-value">{price.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightInfoBox;
