import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentWeather,
  selectForecast,
  selectWeatherStatus,
  selectWeatherError,
} from '../redux/weather/weatherSelectors';

const WeatherDisplay = () => {
  const current = useSelector(selectCurrentWeather);
  const forecast = useSelector(selectForecast);
  const status = useSelector(selectWeatherStatus);
  const error = useSelector(selectWeatherError);

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-4">
      {current && (
        <div className="border p-4 rounded bg-gray-100">
          <h2 className="text-xl font-bold">{current.city}</h2>
          <p>{current.date}</p>
          <p>{current.weather}</p>
          <p>{current.temperature}</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Previsión de 5 días:</h3>
          {forecast.map((day, index) => (
            <div key={index} className="border-b py-2">
              <p>{day.date}</p>
              <p>{day.weather}</p>
              <p>{day.temperature}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
