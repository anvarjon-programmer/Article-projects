import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading:false,
    articles:[],
    error:null
};
export const artticleSlice = createSlice({
    name:'article',
    initialState,
    reducers:{
        getArticlesStart: state =>{
            state.isLoading = true
        },
        getArticleSuccess: (state, action) =>{
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: (state, action) =>{
            state.error = action.payload
        }
    }
})
export  const {getArticlesStart, getArticleSuccess, getArticleFailure} = artticleSlice.actions
export default artticleSlice.reducer