import NavigationIcon from '../assets/icons/explore.svg'
import { useWeather } from '../context/WeatherContext'

const PageHero = () => {
    const { weatherData, loading, error } = useWeather();

    if(loading) {
        return <div className='flex justify-center items-center h-full'>Fetching weather data....</div>
    }

    if(error) {
        return <div className='flex justify-center items-center h-full'>No data were found... Try again</div>
    }
  return (
    <div className='flex flex-row justify-between items-center h-full p-6 md:py-12 md:px-24'>
        <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                    <img className='w-8 h-8' src={NavigationIcon} alt="navigation" />
                    <span className='text-xl'>{ weatherData.location.name } | {weatherData.location.country}</span>
                </div>
                <h2 className='text-5xl font-bold flex items-center gap-2'>
                    { weatherData.current.condition.text }
                    <span><img className='w-[50px] h-[50px]' src={weatherData.current.condition.icon} alt="condition" /></span>
                </h2>
            </div>

            <div>
                <h2 className='text-5xl'>{ weatherData.current.temp_c }°C</h2>
                <span className='text-gray-400'>Sunday | 12 June 2024</span>
            </div>
        </div>

        <div>
        </div>
    </div>
  )
}

export default PageHero