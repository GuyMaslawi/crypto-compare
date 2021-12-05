import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface cryptoState {
    extraData: {},
    loading: boolean
}

const initialState: cryptoState = {
    loading: false,
    extraData: {},
}

export const fetchData = createAsyncThunk('cryptoExtraData/fetchData', async () => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/all/coinlist');
    return response.data.Data;
});

export const cryptoSliceExtraData = createSlice({
    name: 'cryptoExtraData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = false
            })
            .addCase(fetchData.fulfilled, (state, {payload}: PayloadAction<{}>) => {
                state.loading = true

                state.extraData = Object.values(payload).map((item: any) => ({
                    Symbol: item.Symbol,
                    ContentCreatedOn: item.ContentCreatedOn,
                    Description: item.Description,
                    BlockNumber: item.BlockNumber,
                }));
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false
            })
    }
})

export default cryptoSliceExtraData.reducer;
