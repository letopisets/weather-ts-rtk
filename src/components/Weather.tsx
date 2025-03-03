import React from 'react';
import { useAppSelector } from "../app/hooks.ts";
import {RootState} from "../app/store.ts";

const Weather: React.FC = () => {
    const message = useAppSelector((state: RootState) => state.message.message);
    const weather = useAppSelector((state: RootState) => state.weatherInfo);

    return (
        <div className="infoWeath">
            {!message ? (
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
}

export default Weather;
