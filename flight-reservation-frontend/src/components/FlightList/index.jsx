import React from 'react';
import './index.css';

const FlightList = () => {
  const flightsData = [
    {
        id: 1,
        time: "7:40 AM - 9:12 AM",
        airline: "Delta Air Lines",
        flightType: "Nonstop · 1h 32m",
        airportFrom: "SFO",
        airportTo: "LAX",
        flightNumber: "DL 1443",
        prices: [
            { type: "Main", price: "$156" },
            { type: "Comfort+", price: "$204" },
            { type: "Delta One", price: "$386" }
        ]
    },
    {
      id: 2,
      time: "7:00 AM - 8:52 AM",
      airline: "American Airlines",
      flightType: "Nonstop · 1h 52m",
      airportFrom: "SFO",
      airportTo: "LAX",
      flightNumber: "AA 166",
      prices: [
        { type: "Main", price: "$182" },
        { type: "First", price: "$400" }
      ]
    },
    {
      id: 3,
      time: "8:15 AM - 9:50 AM",
      airline: "Southwest Airlines",
      flightType: "Nonstop · 1h 35m",
      airportFrom: "SFO",
      airportTo: "LAX",
      flightNumber: "WN 2234",
      prices: [
        { type: "Anytime", price: "$225" },
        { type: "Business Select", price: "$253" }
      ]
    },
    {
      id: 4,
      time: "8:00 AM - 9:46 AM",
      airline: "United",
      flightType: "Nonstop · 1h 46m",
      airportFrom: "SFO",
      airportTo: "LAX",
      flightNumber: "UA 613",
      prices: [
        { type: "Economy", price: "$183" },
        { type: "Economy Flexible", price: "$449" },
        { type: "First", price: "$407" }
      ]
    }
  ];

  return (
    <div className="flight-list">
      {flightsData.map((flight) => (
        <div key={flight.id} className="flight-card">
          <div className="flight-info">
            <div className="flight-time">{flight.time}</div>
            <div className="flight-details">
              <div className="airline-name">{flight.airline}</div>
              <div className="flight-route">{flight.flightType}</div>
              <div className="flight-number">{flight.flightNumber}</div>
            </div>
            <div className="flight-destination">
              {flight.airportFrom} to {flight.airportTo}
            </div>
            <a href="#" className="flight-details-link">Flight Details</a>
          </div>
          <div className="flight-prices">
            {flight.prices.map((price, index) => (
              <div key={index} className="price-box">
                <div className="price">{price.price}</div>
                <div className="price-type">{price.type}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
