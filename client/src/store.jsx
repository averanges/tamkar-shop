import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";
import userSlice from "./slices/userSlice";
import { apiQuery } from "./services/apiQuery";


const store = configureStore({
    reducer: {
        [apiQuery.reducerPath]: apiQuery.reducer,
        ui: uiSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiQuery.middleware)
})

export default store