import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useWeather } from '../../../context/WeatherContext'
import Card from '../../UI/Card';

const Map = () => {
    const { weatherData, loading, error } = useWeather();

    if (loading) {
        return (
            <Card className='h-[86%] w-full animate-pulse bg-gray-300/30' />
        );
        }

        if (error) {
        return (
            <Card className='h-[86%] w-full flex justify-center items-center'>
                {error}
            </Card>
        );
        }

        if (!weatherData || !weatherData.current) {
        return (
            <Card className='h-[86%] w-full flex justify-center items-center'>
                Map data is not available right now.
            </Card>
        );
    }

    const latitude = weatherData.location.lat;
    const longitude = weatherData.location.lon;
    return (
        <MapContainer
            center={[latitude, longitude]} // Default center [latitude, longitude]
            zoom={5} // Default zoom level
            className='w-full h-[300px] md:h-[86%] rounded-xl'
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={[latitude, longitude]}>
            </Marker>
        </MapContainer>
    );
};

export default Map;
