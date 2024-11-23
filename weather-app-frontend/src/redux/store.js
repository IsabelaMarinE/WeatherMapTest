import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../redux/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
