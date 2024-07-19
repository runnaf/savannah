import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from '../../../shared/api/api';
import { createCatCardSlice } from "../../../feature/EditAddForm/model/slises/Slice";


const rootReducer = combineReducers({
    createCatCard: createCatCardSlice,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});