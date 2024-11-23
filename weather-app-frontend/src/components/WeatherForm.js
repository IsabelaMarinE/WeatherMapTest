import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather, fetchForecast } from '../redux/weather/weatherThunks';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || !countryCode) {
      alert('Por favor, ingresa una ciudad y un código de país.');
      return;
    }
    dispatch(fetchWeather({ city, countryCode }));
    dispatch(fetchForecast({ city, countryCode, days: 5 }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Country Code"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Search</button>
    </form>
  );
};

export default WeatherForm;
