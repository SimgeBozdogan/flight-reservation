import './index.css';
import Header from '../../components/Header';
import FlightSearch from '../../components/FlightSearch';
import Sidebar from '../../components/Sidebar';
import FilterSidebar from '../../components/FilterSidebar';
import FlightCard from '../../components/FlightCard';

export default function HomePage() {
    const flightData = [
        {
            id: 1,
            from: 'Milano',
            to: 'Madrid',
            departureTime: '7:30 AM',
            arrivalTime: '9:55 AM',
            airline: 'Alitalia',
            price: '$200',
            airportFrom: 'MXP',
            airportTo: 'MAD',
            duration: '2h 25m (Nonstop)',
        },
        {
            id: 2,
            from: 'Milano',
            to: 'Madrid',
            departureTime: '8:30 PM',
            arrivalTime: '10:55 PM',
            airline: 'Alitalia',
            price: '$234',
            airportFrom: 'MXP',
            airportTo: 'MAD',
            duration: '2h 25m (Nonstop)',
        },
    ];

    return (
        <div className="root">
            <Header />
            <div className="container">
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
    );
}