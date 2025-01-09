import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentWeather, getForecast, fetchCityImage } from '../api/weatherApiClient';

interface WeatherContextProps {
    weatherData: any | null;
    forecastData: any | null;
    loading: boolean;
    cityImage: string | null;
    error: string | null;
    city: string;
    coordinates: [number, number];
    fetchWeather: (newCity: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [city, setCity] = useState('Amsterdam');
    const [coordinates, setCoordinates] = useState<[number, number]>([52.3676, 4.9041]); // default coordinates of Amsterdam
    
    const fetchWeather = async (newCity: string) => {
        try {
            setLoading(true);
            // Fetch current weather
            const currentWeather = await getCurrentWeather(newCity);
            setWeatherData(currentWeather);
            setCity(newCity);
            setCoordinates([currentWeather.location.lat, currentWeather.location.lon]);

            // Fetch forecast
            const forecast = await getForecast(newCity, 3); // Fetch 3-day forecast
            setForecastData(forecast);

            // Fetch city image
            const image = await fetchCityImage(newCity);
            setCityImage(image ? image.urls.regular : null);

            setLoading(false);
        } catch (err) {
            setError('Failed to fetch weather/forecast data: ' + err);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchWeather(city);
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherData, forecastData, loading, cityImage, error, city, coordinates,  fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};