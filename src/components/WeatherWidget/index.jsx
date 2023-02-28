import { useEffect, useState } from "react";
import { getWeather } from "../../api/weatherApi";

import weatherLogo from "../../assets/weather.svg";
import Clouds from "./Clouds";
import Search from "./Search";
import Results from "./Results";
import Error from "./Error";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [showCloud, setShowCloud] = useState(false);

  const getWeatherData = async () => {
    setShowCloud(true);
    const request = await getWeather(location);

    setTimeout(() => {
      if (!request.error) {
        setError(null);
        if (request.response.status === 200)
          setWeatherData(() => request.response.data);
      } else {
        setError(request.error);
      }
    }, 200);

    const timeout = setTimeout(() => {
      setShowCloud(false);
    }, 500);
  };

  return (
    <div className="parent-container">
      <Clouds cloudState={showCloud} />

      {weatherData && !error ? (
        <Results
          location={location}
          setLocation={setLocation}
          getWeatherData={getWeatherData}
          country={weatherData.sys.country}
          city={weatherData.name}
          main={weatherData.weather[0].main}
          description={weatherData.weather[0].description}
          temp={weatherData.main.temp}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          pressure={weatherData.main.pressure}
          setShowCloud={setShowCloud}
        ></Results>
      ) : error ? (
        <Error
          location={location}
          error={error}
          setLocation={setLocation}
          getWeatherData={getWeatherData}
          setShowCloud={setShowCloud}
        />
      ) : (
        <Search
          location={location}
          setLocation={setLocation}
          getWeatherData={getWeatherData}
        />
      )}
    </div>
  );
};

export default WeatherWidget;
