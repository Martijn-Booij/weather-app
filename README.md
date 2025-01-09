# Weather App
---

A simple and intuitive weather application built using React, designed to showcase your React skills. The app fetches real-time weather data for any location using a weather API.

---
## Features

- 🌤️ **Current Weather:** Displays the current temperature, weather condition, and location.
- 📅 **Forecast:** Provides a 5-day weather forecast.
- 🔍 **Search:** Search for weather updates by city name.
- 💻 **Responsive Design:** Works seamlessly on both desktop and mobile devices.

## Technologies Used

- **React:** Frontend library for building the UI.
- **Axios:** For API requests.
- **CSS/Styled Components:** For styling.
- **Weather API:** Used to fetch real-time weather data (e.g., OpenWeatherMap API).

---
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get an API key from the [OpenWeatherMap API](https://openweathermap.org/) (or your chosen weather API).

4. Create a `.env` file in the root directory and add your API key:
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Enter a city name in the search bar to view its weather.

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── features/
│   │   │   ├── Map/
│   │   │   │   └── Map.tsx
│   │   │   ├── Search/
│   │   │   │   └── SearchBar.tsx
│   │   │   └── WeatherConditions/
│   │   │       ├── WeatherConditions.tsx
│   │   │       └── WeatherConditionsItem.tsx
│   │   └── UI/
│   │       └── PageHero.tsx
│   ├── context/
│   │   └── WeatherContext.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── styles/
│   ├── utils/
│   │   └── weatherUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .env

```

---

Enjoy using the Weather App! If you have any suggestions or feedback, feel free to share. 😊
