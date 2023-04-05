import { configureStore } from '@reduxjs/toolkit'
import ProductStore from '../reducers/productReducers'
import AuthStore from '../reducers/authReducers'

//Store  -------------------------------------->

export const store = configureStore({
    reducer: {
        ProductStoreState: ProductStore,
        AuthStoreState: AuthStore
    }
})

//--------------------------------------------->

