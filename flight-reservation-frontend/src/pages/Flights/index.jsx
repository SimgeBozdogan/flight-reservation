// src/pages/FlightsPage/index.jsx
import React from 'react';
import FilterBar from '../../components/FilterBar';
import FlightList from '../../components/FlightList';
import './index.css';

export default function FlightsPage() {
    return (
        <div className="flights-page">
            {/* Mavi arka planlı üst kısım */}
            <div className="header-background">
                <div className="header-container">
                    <FilterBar />
                </div>
                <div className="header-info">
                    <div className="rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <div className="avg-fare">
                        <i className="info-icon">ℹ</i> Avg Fare: $225
                    </div>
                </div>
            </div>

            {/* Beyaz arka planlı içerik kısmı */}
            <div className="flights-container">
                <div className="sort-by">
                    <span>Sort by: <span>Recommended</span></span>
                </div>
                <FlightList />
            </div>
        </div>
    );
}
