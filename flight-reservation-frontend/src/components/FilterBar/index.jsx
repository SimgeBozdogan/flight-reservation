import React from "react";
import "./index.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filters">
        <button className="filter-button">Times</button>
        <button className="filter-button">Stops</button>
        <button className="filter-button">Airlines</button>
        <button className="filter-button">Airports</button>
        <button className="filter-button">Amenities</button>
        <span className="edit-search">Edit Search</span>
      </div>
      <div className="sort-and-rating">
        <span>Sort by: <strong>Recommended</strong></span>
        <div className="rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
        <span className="avg-fare">Avg Fare: $225</span>
      </div>
    </div>
  );
};

export default FilterBar;