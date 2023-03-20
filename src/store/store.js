import { configureStore } from '@reduxjs/toolkit'
import newProducts from '../features/fetchNewProducts'
import categories from '../features/fetchCategories'

export const store = configureStore({
    reducer: {
        newProductsState: newProducts,
        categories: categories
    }
})

