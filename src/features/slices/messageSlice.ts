import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {createSlice} from "@reduxjs/toolkit";

interface MessageState {
    message: string;
}

const initialState: MessageState = {
    message: 'Enter city name',
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => ({ message: 'Pending...' }))
            .addCase(fetchWeather.fulfilled, () => ({ message: '' }))
            .addCase(fetchWeather.rejected, (_state, action) => ({ message: action.error.message || 'Error' }))
    },
})

export default messageSlice.reducer
