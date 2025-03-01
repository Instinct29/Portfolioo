import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, Sun, Snowflake, CloudFog, CloudLightning, Wind } from 'lucide-react';

interface WeatherData {
    temperature: number;
    condition: string;
    location: string;
    loading: boolean;
    error: string | null;
}

// Weather condition mapping using an object for better performance
const WEATHER_CONDITIONS: Record<number, string> = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Partly Cloudy',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Drizzle',
    53: 'Drizzle',
    55: 'Drizzle',
    56: 'Freezing Drizzle',
    57: 'Freezing Drizzle',
    61: 'Rain',
    63: 'Rain',
    65: 'Rain',
    66: 'Freezing Rain',
    67: 'Freezing Rain',
    71: 'Snow',
    73: 'Snow',
    75: 'Snow',
    77: 'Snow',
    80: 'Rain Showers',
    81: 'Rain Showers',
    82: 'Rain Showers',
    85: 'Snow Showers',
    86: 'Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm',
    99: 'Thunderstorm'
};

const WeatherWidget: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData>({
        temperature: 0,
        condition: '',
        location: '',
        loading: true,
        error: null
    });

    const fetchWeather = async (latitude: number, longitude: number) => {
        try {
            const [weatherResponse, geoResponse] = await Promise.all([
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`),
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`)
            ]);

            if (!weatherResponse.ok) throw new Error('Weather data not available');
            if (!geoResponse.ok) throw new Error('Location data not available');

            const [weatherData, geoData] = await Promise.all([
                weatherResponse.json(),
                geoResponse.json()
            ]);

            const locationName = geoData.address.city ||
                geoData.address.town ||
                geoData.address.village ||
                geoData.address.county ||
                'Unknown';

            setWeather({
                temperature: Math.round(weatherData.current.temperature_2m),
                condition: WEATHER_CONDITIONS[weatherData.current.weather_code] || 'Unknown',
                location: locationName,
                loading: false,
                error: null
            });
        } catch (error) {
            console.error('Error fetching weather:', error);
            setWeather(prev => ({
                ...prev,
                loading: false,
                error: 'Failed to fetch weather data'
            }));
        }
    };

    // Get weather icon based on condition
    const getWeatherIcon = (condition: string) => {
        const cond = condition.toLowerCase();
        const iconProps = { size: 16 };

        switch (true) {
            case cond.includes('clear') || cond.includes('sunny'):
                return <Sun {...iconProps} className="text-yellow-400" />;
            case cond.includes('cloud') || cond.includes('partly'):
                return <Cloud {...iconProps} className="text-gray-400" />;
            case cond.includes('rain') || cond.includes('drizzle') || cond.includes('shower'):
                return <CloudRain {...iconProps} className="text-blue-400" />;
            case cond.includes('snow'):
                return <Snowflake {...iconProps} className="text-blue-200" />;
            case cond.includes('thunder'):
                return <CloudLightning {...iconProps} className="text-purple-400" />;
            case cond.includes('fog'):
                return <CloudFog {...iconProps} className="text-gray-300" />;
            default:
                return <Wind {...iconProps} className="text-gray-500" />;
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            setWeather(prev => ({
                ...prev,
                loading: false,
                error: 'Geolocation not supported'
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
            (error) => {
                console.error('Error getting location:', error);
                setWeather(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Location access denied'
                }));
            }
        );
    }, []);

    const { loading, error, temperature, location, condition } = weather;

    if (loading) {
        return (
            <div className="flex items-center gap-1 text-xs text-gray-500 animate-pulse">
                <Cloud size={14} />
                <span>Loading weather...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center gap-1 text-xs text-steelGray">
                <Cloud size={14} />
                <span>Weather unavailable</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 text-xs mb-4 text-steelGray rounded-full">
            {getWeatherIcon(condition)}
            <span>{temperature}°C</span>
            <span className="mx-1">•</span>
            <span>{location}</span>
        </div>
    );
};

export default WeatherWidget;