import React, { FormEvent } from 'react';
import { weather_cache_time } from "../utils/constants.ts";
import { fetchWeather } from "../features/api/asyncWeatherAction.ts";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import {RootState} from "../app/store.ts";

const Form: React.FC = () => {
    const dispatch = useAppDispatch();
    const { timestamp, city: name } = useAppSelector((state: RootState) => state.weatherInfo);

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = (e.target as HTMLFormElement).city.value.trim();
        if (city !== name || Date.now() - timestamp > weather_cache_time) {
            dispatch(fetchWeather(city));
        }
        (e.target as HTMLFormElement).city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type="text" name="city" />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
