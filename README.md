# Weather App - Fullstack Application with Laravel and React

This project is a full-stack application that allows users to search for the current weather and a 5-day forecast for any city. The backend is built with **Laravel**, and the frontend is developed using **React**, **Redux**, and styled with **Tailwind CSS**. The application integrates with the OpenWeatherMap API to fetch weather data.

---

## Features

- **Frontend**:
  - Users can input a city and country code to get weather data (e.g., `MadridES`, `HavanaCU`).
  - Displays the current weather and 5-day forecast.
  - Fully responsive design using **Tailwind CSS**.
  - State management with **Redux**.

- **Backend**:
  - Built with **Laravel** to handle API requests.
  - Two endpoints:
    - `/api/weather/current`: Fetches the current weather for a given city.
    - `/api/weather/forecast`: Fetches a 5-day weather forecast for a given city.
  - Integration with **OpenWeatherMap API** for weather data.

---

## Technologies Used

- **Frontend**: React, Redux, Tailwind CSS, Axios
- **Backend**: Laravel, PHP
- **External API**: OpenWeatherMap
- **State Management**: Redux
- **Environment Management**: dotenv for API keys and configuration.

---

## Prerequisites

- Node.js and npm installed.
- PHP and Composer installed.
- MySQL or any supported database.
- Laravel installed globally.
- OpenWeatherMap API Key.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/IsabelaMarinE/WeatherMapTest
cd weather-app
```

## Backend Setup
```bash
cd weather-app-backend
composer install
cp .env.example .env

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=weather_app
DB_USERNAME=root
DB_PASSWORD=

OPENWEATHER_API_KEY=your_openweathermap_api_key
URL_WEATHERMAP='https://api.openweathermap.org/data/2.5/forecast'

hp artisan key:generate
php artisan serve
```
Your Laravel API will be available at http://127.0.0.1:8000.

## Frontend Setup
```bash
cd weather-app-frontend
npm install
npm start
```

## Project Structure
**Frontend (React)**
Components:
- WeatherForm: Handles the city search input and dispatches API requests.
- WeatherResult: Displays the current weather and 5-day forecast.

Redux:
- store.js: Configures the Redux store.
- weather/weatherReducer.js: Manages weather state.
- weather/weatherActions.js: Defines Redux actions for weather requests.
- weather/weatherThunks.js: Handles API calls to the backend.
- weather/weatherSelectors.js: Manager states.


**Backend (Laravel)**
Routes:
- Defined in routes/api.php for current and forecast endpoints.

Controller:
- WeatherController: Handles requests and integrates with OpenWeatherMap API.

Environment Variables:
- API keys are stored in the .env file.
