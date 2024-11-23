<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::get('/weather/current/{city}/{countryCode}', [WeatherController::class, 'getCurrentWeather']);
Route::get('/weather/forecast/{city}/{countryCode}/{days}', [WeatherController::class, 'getWeatherForecast']);
