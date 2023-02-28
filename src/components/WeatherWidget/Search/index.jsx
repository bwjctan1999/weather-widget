import weatherLogo from "../../../assets/weather-icons/sun.svg"

import "./Search.css"

const Search = ({location, setLocation, getWeatherData}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeatherData();
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <img src={weatherLogo} className="logo" alt="logo" />
        <h1 className="title">WeatherCaster</h1>
      </div>
      <div className="container">
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
    </div>
  );
};

export default Search;
