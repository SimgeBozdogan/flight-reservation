// src/components/RatingStars/index.jsx
import React from 'react';
import './index.css';

const RatingStars = () => {
    return (
        <div className="rating-stars-container">
            <div className="rating-group">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
            </div>
            <div className="divider">|</div>
            <div className="rating-group">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
            </div>
        </div>
    );
};

export default RatingStars;
