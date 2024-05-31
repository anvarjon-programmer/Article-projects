import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:'count',
    initialState:{count:0},
    reducers:{
        plusCOunter:(state, payload) =>{
            state.count +=1
        },
        minusCOunter:(state, payload) =>{
            state.count -=1
        },
        resetCOunter:(state, payload) =>{
            state.count = 0
        },
    },
})
export const {plusCOunter,resetCOunter,minusCOunter} = countSlice.actions;
export default countSlice.reducer