import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    newProducts: []
}

const fetchNewProducts = createSlice({
    name: 'newProducts',
    initialState,
    reducers: {
        async getNewProducts(state) {
            state.newProducts = (await fetch('https://fakestoreapi.com/products?limit=8')).json()
        }
    }
})

export const { getNewProducts } = fetchNewProducts.actions;
export default fetchNewProducts.reducer;