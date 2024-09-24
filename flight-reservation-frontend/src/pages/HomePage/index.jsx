import './index.css';
import Header from '../../components/Header';
import FlightSearch from '../../components/FlightSearch';
import Sidebar from '../../components/Sidebar';
import FilterSidebar from '../../components/FilterSidebar';
import FlightCard from '../../components/FlightCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/flights');
                setFlightData(response.data.flights);
            } catch (error) {
                console.error("Error fetching flight data:", error);
            }
        };
        
        fetchFlightData();
    }, []);

    return (
        <div className="container">
            <div className="root">
                <Header />
                <div className="square">
                    <div className="main">
                        <FlightSearch />
                        <div className="content">
                            <div className="flight-list">
                                {flightData.map((flight) => (
                                    <FlightCard key={flight.id} flight={flight} />
                                ))}
                            </div>
                            <FilterSidebar />
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}