import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Obtener el clima actual
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ city, countryCode }, thunkAPI) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/weather/current/${city}/${countryCode}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
;

// Obtener la previsión del clima
export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async ({ city, countryCode, days }, thunkAPI) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/weather/forecast/${city}/${countryCode}/${days}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);