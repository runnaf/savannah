import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from '../../../shared/api/api';
import createCatCard from "../../../feature/EditAddForm/model/Slice";

const rootReducer = combineReducers({
    createCatCard,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});