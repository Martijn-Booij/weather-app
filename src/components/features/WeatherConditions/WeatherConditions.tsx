import Card from '../../UI/Card'
import WeatherConditionsItem from './WeatherConditionsItem'

import FeelIcon from '../../../assets/icons/feel.svg'
import WindIcon from '../../../assets/icons/wind.svg'
import RainIcon from '../../../assets/icons/raindrop.svg'
import SunIcon from '../../../assets/icons/sun.svg'
import { useWeather } from '../../../context/WeatherContext'
import { calculateAverageChanceOfRain } from '../../../utils/weatherUtils';

const WeatherConditions = () => {
  const { weatherData, forecastData, loading, error } = useWeather();
  const averageChanceOfRain = calculateAverageChanceOfRain(forecastData).toString();

  if (error) {
    return (
      <Card className="p-6 h-full">
        <h3 className="uppercase font-bold">Air Conditions</h3>
        <p className="text-red-500">Error: {error}</p>
      </Card>
    );
  }

  if (!weatherData || !weatherData.current) {
    return (
      <Card className="p-6 h-full">
        <h3 className="uppercase font-bold">Air Conditions</h3>
        <p>No weather data available.</p>
      </Card>
    );
  }

  return (
    <Card className='p-6 h-full'>
        <h3 className='uppercase text-2xl font-bold'>Air Conditions</h3>
        <div className='flex flex-col gap-4 py-6'>
          <WeatherConditionsItem IsLoading={loading} Image={FeelIcon} Label="Feels as" Value={weatherData.current.feelslike_c + '°C'} />
          <WeatherConditionsItem IsLoading={loading} Image={WindIcon} Label="Wind speed" Value={weatherData.current.gust_kph + 'km/h'}  />
          <WeatherConditionsItem IsLoading={loading} Image={RainIcon} Label="Chance of rain" Value={averageChanceOfRain + "%"}  />
          <WeatherConditionsItem IsLoading={loading} Image={SunIcon} Label="UV index" Value={weatherData.current.uv} />
        </div>
    </Card>
  )
}

export default WeatherConditions