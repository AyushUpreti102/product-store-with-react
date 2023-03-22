import { configureStore } from '@reduxjs/toolkit'
import ProductStore from '../reducers/productReducers'

export const store = configureStore({
    reducer: {
        ProductStoreState: ProductStore,
    }
})

