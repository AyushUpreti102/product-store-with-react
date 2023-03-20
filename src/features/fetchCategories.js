import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    categories: []
}

export const fetchCategories = createAsyncThunk('categories/getCategories', async () => {
    return await fetch('https://fakestoreapi.com/products/categories').then((result) => result.json())
})

const categories = createSlice({
    name: 'newProducts',
    initialState,
    reducers: {
        //
    },
    extraReducers: {
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        }
    }
})


// export const { get } = categories.actions;
export default categories.reducer;