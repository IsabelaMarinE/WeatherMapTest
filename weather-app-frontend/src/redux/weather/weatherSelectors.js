export const selectCurrentWeather = (state) => state.weather.current;
export const selectForecast = (state) => state.weather.forecast;
export const selectWeatherStatus = (state) => state.weather.status;
export const selectWeatherError = (state) => state.weather.error;