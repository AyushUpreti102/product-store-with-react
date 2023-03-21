import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    relatedProducts: [],
}

export const fetchReleatedProducts = createAsyncThunk('fetchProductByName', async (category) => {
    return await fetch(`https://fakestoreapi.com/products/category/${category}`).then((result) => result.json())
})

const categoryProducts = createSlice({
    name: 'productsCategory',
    initialState,
    reducers: {
        //
    },
    extraReducers: {
        [fetchReleatedProducts.fulfilled]: (state, action) => {
            state.relatedProducts = action.payload
        }
    }
})

export default categoryProducts.reducer;