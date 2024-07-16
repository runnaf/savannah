import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cat:   {        
        images: '',
        name_cat: '',
        generate:'',
        sex: '',
        age: '',
        shipment: ''
    }
};

export const Slice = createSlice ({
    name: 'FormData',
    initialState,
    reducers: {
        initFormData: (state, action) => {
            state.cat = action.payload;
        },
        resetFormData: () => {
            return {initialState}            
        },
        setFormData: (state, action) => {
            return {...state.cat, [action.payload.name]: action.payload.value}
        },

    }
})

export const { setFormData, resetFormData, saveFormData } = counterSlice.actions

export default counterSlice.reducer