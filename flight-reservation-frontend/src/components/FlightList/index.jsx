import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import FlightCard from '../FlightCard'; 

const FlightList = () => {
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/flights');
        console.log("Frontend API Response:", response.data); // Gelen veriyi kontrol ediyoruz

        // Eğer response.data bir array ise kullan, değilse boş array olarak ata
        setFlightsData(Array.isArray(response.data) ? response.data : response.data.flights || []);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchFlightData();
  }, []);

  return (
    <div className="flight-list">
      {Array.isArray(flightsData) && flightsData.length > 0 ? (
        flightsData.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default FlightList;
