import React from 'react';
import './index.css';

export default function FilterBar() {
    return (
        <div className="filter-bar">
            <div className="filters">
                <button className="filter-button">Times</button>
                <button className="filter-button">Stops</button>
                <button className="filter-button">Airlines</button>
                <button className="filter-button">Airports</button>
                <button className="filter-button">Amenities</button>
            </div>
            <a href="#" className="edit-search">Edit Search</a>
        </div>
    );
}
