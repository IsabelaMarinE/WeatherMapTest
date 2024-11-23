<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{

    public function getCurrentWeather($city, $countryCode)
    {

        $apiKey = env('OPENWEATHER_API_KEY');
        $url = env('URL_WEATHERMAP');
        $response = Http::get($url, [
            'q' => "{$city},{$countryCode}",
            'appid' => $apiKey,
            'units' => 'imperial', // Cambiar a 'metric' para grados Celsius
        ]);

        if ($response->successful()) {
            return response()->json([
                'city' => "{$response['name']} ({$countryCode})",
                'date' => now()->toFormattedDateString(),
                'weather' => $response['weather'][0]['description'],
                'temperature' => "{$response['main']['temp']}°F",
            ]);
        }

        return response()->json(['error' => 'City not found'], 404);
    }

    public function getWeatherForecast($city, $countryCode, $days)
    {
        $apiKey = env('OPENWEATHER_API_KEY');
        $url = env('URL_WEATHERMAP');
        $response = Http::get($url, [
            'q' => "{$city},{$countryCode}",
            'appid' => $apiKey,
            'cnt' => $days * 8,
            'units' => 'imperial',
        ]);

        if ($response->successful()) {
            $forecast = collect($response['list'])->map(function ($item) {
                return [
                    'date' => \Carbon\Carbon::parse($item['dt_txt'])->toFormattedDateString(),
                    'weather' => $item['weather'][0]['description'],
                    'temperature' => "{$item['main']['temp']}°F",
                ];
            });

            return response()->json([
                'city' => "{$response['city']['name']} ({$countryCode})",
                'forecast' => $forecast->take(5),
            ]);
        }

        return response()->json(['error' => 'City not found'], 404);
    }
}
