export const calculateAverageChanceOfRain = (forecastData: any) => {
    if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
        return 0;
    }

    const today = new Date().toISOString().split('T')[0];

    const todayForecast = forecastData.forecast.forecastday.find(
        (day: any) => day.date === today
    );

    if (!todayForecast || !todayForecast.hour) {
        return 0;
    }

    const todayHours = todayForecast.hour;

    const totalChanceOfRain = todayHours.reduce((total: number, hour: any) => {
        return total + hour.chance_of_rain;
    }, 0);

    const averageChanceOfRain = totalChanceOfRain / todayHours.length;

    return Math.round(averageChanceOfRain);
};