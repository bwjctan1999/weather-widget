import "./Results.css";
import weatherLogo from "../../../assets/weather.svg";
import thunderStorm from "../../../assets/weather-icons/lightning.svg";
import rain from "../../../assets/weather-icons/sun-clouds-rain.svg";
import snow from "../../../assets/weather-icons/clouds-snow.svg";
import clear from "../../../assets/weather-icons/sun.svg";
import clouds from "../../../assets/weather-icons/cloudy.svg";

import { useState, useEffect } from "react";

const Results = ({
  location,
  setLocation,
  getWeatherData,
  country,
  city,
  main,
  description,
  temp,
  humidity,
  windSpeed,
  pressure,
}) => {
  const weatherIcons = {
    Thunderstorm: thunderStorm,
    Drizzle: rain,
    Rain: rain,
    Snow: snow,
    Clear: clear,
    Clouds: clouds,
  };

  const icon = weatherIcons[main] || clouds;
  const test = 229.22;

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
    <div className={`results ${main}`}>
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
        <div className="weather-container">
          <div>
            <p class="main-info">{`${country}, ${city}`}</p>
            <p class="description">{description}</p>
            <p class="temp">{Math.floor(temp / 10) + "°"}</p>
          </div>
          <img src={icon} className="weather-icon" />
        </div>

        <div className="other-container">
          <div className="other-item-container">
            <p className="other-value">{humidity}%</p>
            <p className="other-description">Humidity</p>
          </div>

          <div className="other-item-container">
            <p className="other-value">{pressure} hPa</p>
            <p className="other-description">Pressure</p>
          </div>

          <div className="other-item-container">
            <p className="other-value">{windSpeed} m/s</p>
            <p className="other-description">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
