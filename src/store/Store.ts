import cryptoReducer from './cryptoSlice';
import cryptoExtraDataReducer from './cryptoSliceExtraData';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
        cryptoExtraData: cryptoExtraDataReducer,
    },
});
