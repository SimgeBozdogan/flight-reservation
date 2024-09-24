import HomePage from '../../../pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export default function HomePageRoute() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    );
}