// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Flights from './pages/Flights'; 
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Ana sayfa rotası */}
      <Route path="/flights" element={<Flights />} /> {/* Uçuşlar sayfası rotası */}
    </Routes>
  );
}

export default App;
