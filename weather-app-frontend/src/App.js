import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';

const App = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-4">Consulta el Clima</h1>
      <WeatherForm />
      <WeatherResult />
    </div>
  );
};

export default App;
