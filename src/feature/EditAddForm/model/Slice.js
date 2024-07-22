import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cat: {   
        name_cat: '',
        generate:'',
        sex: '',
        age: '',
        shipment: ''
    }
};

export const createCatCardSlice = createSlice ({
    name: 'createCatCard',
    initialState,
    reducers: {
        initCatCard: (state, action) => {
            state.cat = action.payload;
        },
        resetCatCard: () => {
            return {initialState}            
        },
        setCatCard: (state, action) => {
            return {...state.cat, [action.payload.name]: action.payload.value}
        },

    }
})

export const getCatCard = (state) => state.createCatCard.cat;
export const {  initCatCard, resetCatCard, setCatCard } = createCatCardSlice.actions;
export default createCatCardSlice.reducer