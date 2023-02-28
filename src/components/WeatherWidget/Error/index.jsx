import "./Error.css";

import { useState, useEffect } from "react";

const Error = ({ location, error, setLocation, getWeatherData }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeatherData();
    }
  };

  return (
    <div className="error">
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          onKeyDown={handleKeyDown}
        />
        <button onClick={getWeatherData} className="button">
          Get Weather
        </button>
      </div>

      <div className="primary-container">
        <p class="error-text">{error.response.data.cod === "404"? "Location not Found" : `Error: ${error.response.data.cod}`}</p>
      </div>
    </div>
  );
};

export default Error;
