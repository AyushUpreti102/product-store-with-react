import { configureStore } from '@reduxjs/toolkit'
import ProductStore from '../reducers/productReducers'

//Store  -------------------------------------->

export const store = configureStore({
    reducer: {
        ProductStoreState: ProductStore,
    }
})

//--------------------------------------------->

