import { createSlice } from "@reduxjs/toolkit"

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
            const {filter, option} = action.payload;
            const index = state[filter].indexOf(option)
            index === -1 
                ? state[filter].push(option)
                : state[filter].splice(index, 1)
        },
        resetFilter: () => initialState,
    },
})

export const {resetFilter, setFilter} = filterSlice.actions;
export default filterSlice.reducer;
