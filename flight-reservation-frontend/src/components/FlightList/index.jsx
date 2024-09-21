import React from "react";
import FlightInfoBox from "../FlightInfoBox";
import "./index.css";

const FlightList = () => {
  const flightsData = [
    {
      id: 1,
      time: "7:40 AM - 9:12 AM",
      airline: "Delta Air Lines",
      flightType: "Nonstop",
      route: "SFO to LAX",
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
      flightType: "Nonstop",
      route: "SFO to LAX",
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
      flightType: "Nonstop",
      route: "SFO to LAX",
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
      flightType: "Nonstop",
      route: "SFO to LAX",
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
      {flightsData.map(flight => (
        <FlightInfoBox key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;