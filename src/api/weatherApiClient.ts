import axios from "axios";

const BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

const fetchWeather = async (endpoint: string, params: Record<string, string | number> = {}) => {
    try {
        const response = await api.get(endpoint, {
            params: {
                key: API_KEY,
                ...params,
            }
        })
        return response.data;
    } catch(error) {
        console.error("Error fetching weather data:" + error);
        throw error;
    }
}

export const getCurrentWeather = (location: string) => {
    return fetchWeather('/current.json', {
        q: location,
        aqi: 'yes'
    })
};

export const getForecast = (location: string, days: number) => {
    return fetchWeather('/forecast.json', {
        q: location,
        days,
        aqi: 'no',
        alerts: 'no',
    });
};

export const fetchCityImage = async (city: string) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: city, per_page: 1 },
        headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        });
        return response.data.results[0]; // Return the first image
    } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        return null;
    }
};