import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar';
import FlightList from '../../components/FlightList';
import RatingStars from '../../components/RatingStars'; 
import './index.css';

export default function FlightsPage() {
    const [sortBy, setSortBy] = useState('recommended'); // Başlangıçta 'recommended' seçili

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="flights-page">
            {/* Mavi arka planlı üst kısım */}
            <div className="header-background">
                <div className="flights-container">
                    <div className="header-container">
                        <FilterBar />
                        <div className="header-info">
                            {/* Üç farklı derecelendirme grubu ekledim */}
                            <div className="rating-group">
                                <RatingStars rating={4.5} /> 
                            </div>
                            <div className="rating-group">
                                <RatingStars rating={3.0} /> 
                            </div>
                            <div className="rating-group">
                                <RatingStars rating={5.0} /> 
                            </div>
                            <div className="avg-fare">
                                <i className="info-icon">ℹ</i> Avg Fare: $225
                            </div>
                        </div>
                    </div>
                    <div className="sort-by">
                        <span>Sort by:</span>
                        <select 
                            value={sortBy} 
                            onChange={handleSortChange}
                            className="sort-select"
                        >
                            <option value="recommended">Recommended</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="duration">Duration</option>
                            <option value="departure-time">Departure Time</option>
                        </select>
                    </div>
                    <FlightList />
                </div>
            </div>
        </div>
    );
}
