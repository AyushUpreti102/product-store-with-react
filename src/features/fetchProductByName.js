import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
}

export const fetchProductByName = createAsyncThunk('fetchProductByName', async (productID) => {
    return await fetch(`https://fakestoreapi.com/products/${productID}`).then((result) => result.json())
})

const product = createSlice({
    name: 'productName',
    initialState,
    reducers: {
        //
    },
    extraReducers: {
        [fetchProductByName.fulfilled]: (state, action) => {
            state.product = action.payload
        }
    }
})

export default product.reducer;