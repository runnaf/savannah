import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false
}

export const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        getState: (state) => {
            state.open = !state.open
        },
    },
})

export const {getState} = openSlice.actions;
export default openSlice.reducer;