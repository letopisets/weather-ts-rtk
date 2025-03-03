import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {createSlice} from "@reduxjs/toolkit";

interface WeatherState {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
    timestamp: number;
}

const initialState: WeatherState = {
    country: '',
    city: '',
    temp: 0,
    pressure: 0,
    sunset: 0,
    timestamp: 0,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => initialState)
    }
})

export default weatherSlice.reducer
