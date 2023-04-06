import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Async thunks for async calls from server -------------------------------------------------------------------->

//Fetch New Product List in Store Page
export const fetchNewProductsList = createAsyncThunk('newproducts/getNewProducts', async (page) => {
    return await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`).then((result) => result.json())
})

//Fetch Product Categories in Categories Page 
export const fetchCategories = createAsyncThunk('categories/getCategories', async () => {
    return await fetch('https://dummyjson.com/products/categories').then((result) => result.json())
})

//Fetch Product By Name in Product Page
export const fetchProductByID = createAsyncThunk('product/getProductByName', async (productID) => {
    return await fetch(`https://dummyjson.com/products/${productID}`).then((result) => result.json())
})

//Fetch Related Products By Same Categories In Product Page and Category Page
export const fetchReleatedProducts = createAsyncThunk('category/getProductByCategory', async (category) => {
    return await fetch(`https://dummyjson.com/products/category/${category}`).then((result) => result.json())
})

// -------------------------------------------------------------------------------------------------------------->

//Reducer ------------------------------------------------------------------------------------------------>

const ProductStore = createSlice({
    name: 'ProductStore',
    initialState: {
        newProducts: [],
        product: {},
        categories: [],
        relatedProducts: [],
        token: ''
    },
    reducers: {
        // Create reducers for state mutation
    },
    //Extra reducers for handling async mutations
    extraReducers: function (builder) {
        builder.addCase(fetchNewProductsList.fulfilled, (state, action) => {
            state.newProducts = action.payload.products
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(fetchProductByID.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(fetchReleatedProducts.fulfilled, (state, action) => {
            state.relatedProducts = action.payload.products
        })
    }
})

//----------------------------------------------------------------------------------------------------------->

export default ProductStore.reducer;