import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    newProducts: []
}

export const fetchNewProductsList = createAsyncThunk('newproducts/getNewProducts', async () => {
    return await fetch('https://fakestoreapi.com/products?limit=8').then((result) => result.json())
})

const newProducts = createSlice({
    name: 'newProducts',
    initialState,
    reducers: {
        //
    },
    extraReducers: {
        [fetchNewProductsList.fulfilled]: (state, action) => {
            state.newProducts = action.payload
        }
    }
})


export const { getNewProducts } = newProducts.actions;
export default newProducts.reducer;