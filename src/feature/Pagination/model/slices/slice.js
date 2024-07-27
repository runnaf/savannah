import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: 1
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        getPage: (state, action) => {
            state.page = action.payload + 1
        }
    }
})

export const {getPage} = pageSlice.actions;
export default pageSlice.reducer;