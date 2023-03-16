import { configureStore } from '@reduxjs/toolkit'
import fetchNewProducts from '../features/fetchNewProducts'

export const store = configureStore({
    reducer: {
        newProducts: fetchNewProducts
    }
})

