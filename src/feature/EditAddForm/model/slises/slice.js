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
        setFormData: (state, action) => {
            return {...state.cat, [action.payload.name]: action.payload.value}
        },

    }
})

export const {  initCatCard, resetCatCard, setFormData } = createCatCardSlice.actions;
export const getCatCard = state => state.createCatCard.cat;
export default createCatCardSlice.reducer