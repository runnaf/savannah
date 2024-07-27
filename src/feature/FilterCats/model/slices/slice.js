<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import { createSlice } from "@reduxjs/toolkit"
>>>>>>> main

const initialState = {
    generate: [],
    sex: [],
    age: [],
    shipment: [],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
<<<<<<< HEAD
            const { filter, option } = action.payload; 
            const index = state[filter].indexOf(option)
            index === -1 
                ? state[filter].push(option) 
=======
            const {filter, option} = action.payload;
            const index = state[filter].indexOf(option)
            index === -1 
                ? state[filter].push(option)
>>>>>>> main
                : state[filter].splice(index, 1)
        },
        resetFilter: () => initialState,
    },
})

<<<<<<< HEAD
export const { resetFilter, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
=======
export const {resetFilter, setFilter} = filterSlice.actions;
export default filterSlice.reducer;
>>>>>>> main
