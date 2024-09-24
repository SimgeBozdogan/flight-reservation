import './index.css';
import Header from '../../components/Header';
import FlightSearch from '../../components/FlightSearch';
import Sidebar from '../../components/Sidebar';
import FilterSidebar from '../../components/FilterSidebar';
import FlightCard from '../../components/FlightCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function HomePage() {
    const [flightData, setFlightData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

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

    const handleChange = (event, value) => {
        setPage(value);
    };

    const paginatedFlights = flightData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="container">
            <div className="root">
                <Header />
                <div className="square">
                    <div className="main">
                        <FlightSearch />
                        <div className="content">
                            <div className="flight-list">
                                {paginatedFlights.map((flight) => (
                                    <FlightCard key={flight.id} flight={flight} />
                                ))}
                            </div>
                            <FilterSidebar />
                        </div>
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(flightData.length / itemsPerPage)}
                                page={page}
                                onChange={handleChange}
                                color="primary"
                            />
                        </Stack>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}