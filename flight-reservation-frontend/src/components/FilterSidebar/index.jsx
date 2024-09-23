import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="sort-by">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
          <option value="earliest">Earliest Departure</option>
          <option value="latest">Latest Departure</option>
        </select>
      </div>
      <div className="filter-section">
        <h3>Arrival Time</h3>
        <div>
          <input type="checkbox" id="morning" name="arrivalTime" />
          <label htmlFor="morning">5:00 AM - 11:59 AM</label>
        </div>
        <div>
          <input type="checkbox" id="afternoon" name="arrivalTime" />
          <label htmlFor="afternoon">12:00 PM - 5:59 PM</label>
        </div>
      </div>
      <div className="filter-section">
        <h3>Stops</h3>
        <div>
          <input type="checkbox" id="nonstop" name="stops" />
          <label htmlFor="nonstop">Nonstop</label>
        </div>
        <div>
          <input type="checkbox" id="one-stop" name="stops" />
          <label htmlFor="one-stop">1 Stop</label>
        </div>
        <div>
          <input type="checkbox" id="two-stops" name="stops" />
          <label htmlFor="two-stops">2+ Stops</label>
        </div>
      </div>
      <div className="filter-section">
        <h3>Airlines Included</h3>
        <div>
          <input type="checkbox" id="alitalia" name="airline" />
          <label htmlFor="alitalia">Alitalia</label>
        </div>
        <div>
          <input type="checkbox" id="lufthansa" name="airline" />
          <label htmlFor="lufthansa">Lufthansa</label>
        </div>
        <div>
          <input type="checkbox" id="air-france" name="airline" />
          <label htmlFor="air-france">Air France</label>
        </div>
        <div>
          <input type="checkbox" id="brussels-airlines" name="airline" />
          <label htmlFor="brussels-airlines">Brussels Airlines</label>
        </div>
        <div>
          <input type="checkbox" id="air-italy" name="airline" />
          <label htmlFor="air-italy">Air Italy</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;