import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"productList",
    initialState:{
        products:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchProductRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess: (state,action) => {
            state.products = action.payload
            state.loading = false;
        },  
        fetchProductFailed: (state,action) => {
            state.error = action.payload
            state.loading = false;
        }              
    }
})
export const {fetchProductRequest,fetchProductSuccess,fetchProductFailed} = productSlice.actions
export default productSlice.reducer