import React, { useState } from 'react';
import './FlightSearch.css';

const FlightSearch = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    alert(
      `Searching flights from ${departure} to ${destination} on ${date} for ${passengers} passenger(s).`
    );
  };

  return (
    <div className="flight-search-container">
      <h2>Find Your Perfect Flight</h2>
      <div className="search-fields">
        <input
          type="text"
          placeholder="From (City or Airport)"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          placeholder="To (City or Airport)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1} Passenger{num > 0 ? 's' : ''}
            </option>
          ))}
        </select>
        <button onClick={handleSearch} className="search-button">Search Flights</button>
      </div>
    </div>
  );
};

export default FlightSearch;
