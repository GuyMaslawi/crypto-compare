import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

export interface cryptoState {
    list: {},
    selectedCoin: {},
    loading: boolean
}

const initialState: cryptoState = {
    list: {},
    selectedCoin: {},
    loading: false
}

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', async () => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ONE,SHIB,ADA&tsyms=USD');
    return response.data.RAW;
});

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setSelectedCoin: (state, { payload }: PayloadAction<{data: {}}>) => {
            state.selectedCoin = payload.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCoins.fulfilled, (state, { payload }: PayloadAction<{}>) => {
                state.loading = false;

                state.list = Object.values(payload).map((item: any) => ({
                    ...item,
                    USD: {
                        ...item.USD,
                        PINNED: false,
                    }
                }));
            })
            .addCase(fetchCoins.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { setSelectedCoin } = cryptoSlice.actions;

export default cryptoSlice.reducer;
