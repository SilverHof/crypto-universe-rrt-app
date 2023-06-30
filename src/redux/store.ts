import { cryptoNewsApi } from './api/cryptoNewsApi';
import { configureStore } from "@reduxjs/toolkit";
import { exampleApi } from "./api/exampleApi";
import exampleReducer from "./slices/exampleSlice";
import { cryptoApi } from './api/cryptoApi';



const store = configureStore({
   reducer: {
      example: exampleReducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
      [cryptoApi.reducerPath]: cryptoApi.reducer, 
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware),
});

export default store;

// need to work with hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;