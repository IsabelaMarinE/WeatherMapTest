import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, fetchForecast } from './weatherThunks'

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: null, // Clima actual
    forecast: [], // Previsión del clima
    status: 'idle', // Estado de carga ('idle', 'loading', 'succeeded', 'failed')
    error: null, // Mensajes de error
  },
  reducers: {
    clearWeather(state) {
      // Acción sincrónica para limpiar el estado
      state.current = null;
      state.forecast = [];
    },
  },
  extraReducers: (builder) => {
    // Manejo de acciones asíncronas
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.current = action.payload; // Asigna el clima actual al estado
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Manejo de errores
      })
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.forecast = action.payload.forecast; // Asigna la previsión al estado
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;