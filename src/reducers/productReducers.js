import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchNewProductsList = createAsyncThunk('newproducts/getNewProducts', async () => {
    return await fetch('https://fakestoreapi.com/products?limit=16').then((result) => result.json())
})

export const fetchCategories = createAsyncThunk('categories/getCategories', async () => {
    return await fetch('https://fakestoreapi.com/products/categories').then((result) => result.json())
})

export const fetchProductByName = createAsyncThunk('product/getProductByName', async (productID) => {
    return await fetch(`https://fakestoreapi.com/products/${productID}`).then((result) => result.json())
})

export const fetchReleatedProducts = createAsyncThunk('category/getProductByCategory', async (category) => {
    return await fetch(`https://fakestoreapi.com/products/category/${category}`).then((result) => result.json())
})

const ProductStore = createSlice({
    name: 'ProductStore',
    initialState: {
        newProducts: [],
        product: {},
        categories: [],
        relatedProducts: [],
    },
    reducers: {
        //
    },
    extraReducers: {
        [fetchNewProductsList.fulfilled]: (state, action) => {
            state.newProducts = action.payload
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [fetchProductByName.fulfilled]: (state, action) => {
            state.product = action.payload
        },
        [fetchReleatedProducts.fulfilled]: (state, action) => {
            state.relatedProducts = action.payload
        }
    }
})

export default ProductStore.reducer;