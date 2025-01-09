import PageHero from '../components/PageHero'
import WeatherConditions from '../components/features/WeatherConditions/WeatherConditions'
import Map from '../components/features/Map/Map'
import SearchBar from '../components/features/Search/SearchBar'
import { useWeather } from '../context/WeatherContext'


const HomePage = () => {
    const { cityImage } = useWeather();

    return (
        <div className="h-full md:h-screen w-full bg-gray-500 text-white"       
        style={{
            backgroundImage: cityImage ? `url(${cityImage})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='flex flex-col justify-between h-full w-full max-w-[1800px] mx-auto bg-black/40'>
                <div className="h-1/3 w-full">
                    <PageHero />
                </div>
                <div className='flex flex-col md:grid grid-cols-12 gap-4 p-4 h-2/3 mb-8'>
                    <div className='col-span-8 h-full'>
                        <SearchBar />
                        <Map />
                    </div>
                    <div className="col-span-4 h-full">
                        <WeatherConditions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

