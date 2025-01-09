import React, { useState } from 'react'
import { useWeather } from '../../../context/WeatherContext';


const SearchBar = () => {
    const [city, setCity] = useState('');
    const { fetchWeather } = useWeather();

    const handleSearch = () => {
        if (city.trim()) {
            fetchWeather(city.trim());
        }
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    
    return (
        <div className="w-full bg-gray-400/30 backdrop-blur-2xl rounded-full mb-4 text-xl relative">
            <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent p-4 ml-4 text-white placeholder:text-white w-full focus:outline-none"
            />
            <button
            onClick={handleSearch}
            className="bg-white text-black px-8 py-2 rounded-full absolute right-2 top-2"
            >
            Search
            </button>
        </div>
    );
}

export default SearchBar