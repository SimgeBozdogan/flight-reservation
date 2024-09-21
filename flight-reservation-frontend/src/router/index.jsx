import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageRoute from './routes/HomePage';
import FlightsRoute from './routes/FlightsPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<HomePageRoute />} />
                <Route path='/flights/*' element={<FlightsRoute />} />
            </Routes>
        </BrowserRouter>
    );
}