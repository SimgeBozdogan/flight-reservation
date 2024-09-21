import Flights from '../../../pages/Flights';
import { Routes, Route } from 'react-router-dom';

export default function FlightsRoute() {
    return (
        <Routes>
            <Route path='/' element={<Flights />} />
        </Routes>
    );
}