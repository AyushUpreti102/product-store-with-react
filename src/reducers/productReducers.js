import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Async thunks for async calls from server -------------------------------------------------------------------->

//Fetch New Product List in Store Page
export const fetchNewProductsList = createAsyncThunk('newproducts/getNewProducts', async () => {
    return await fetch('https://fakestoreapi.com/products').then((result) => result.json())
})

//Fetch Product Categories in Categories Page 
export const fetchCategories = createAsyncThunk('categories/getCategories', async () => {
    return await fetch('https://fakestoreapi.com/products/categories').then((result) => result.json())
})

//Fetch Product By Name in Product Page
export const fetchProductByName = createAsyncThunk('product/getProductByName', async (productID) => {
    return await fetch(`https://fakestoreapi.com/products/${productID}`).then((result) => result.json())
})

//Fetch Related Products By Same Categories In Product Page and Category Page
export const fetchReleatedProducts = createAsyncThunk('category/getProductByCategory', async (category) => {
    return await fetch(`https://fakestoreapi.com/products/category/${category}`).then((result) => result.json())
})

//Login User In LoginModal Component
export const login = createAsyncThunk('user/login', async ({ username, password }) => {
    //Returns Token
    return await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(res => res.json()).catch(err => console.log(err))
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
            state.newProducts = action.payload
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(fetchProductByName.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(fetchReleatedProducts.fulfilled, (state, action) => {
            state.relatedProducts = action.payload
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log('login payload', action.payload);
            state.token = action.payload
        })
    }
})

//----------------------------------------------------------------------------------------------------------->

export default ProductStore.reducer;