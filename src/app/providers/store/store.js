import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from '../../../shared/api/api';
import createCatCard from "../../../feature/EditAddForm/model/Slice";
import filter from '../../../feature/FilterCats/model/slices/slice'
import page from "../../../feature/Pagination/model/slices/slice";
import open from "../../../feature/FilterCats/model/slices/sliceIsOpen";

const rootReducer = combineReducers({
    createCatCard,
    filter,
    page,
    open,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});