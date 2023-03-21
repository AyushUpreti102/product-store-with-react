import { configureStore } from '@reduxjs/toolkit'
import newProducts from '../features/fetchNewProducts'
import categories from '../features/fetchCategories'
import product from '../features/fetchProductByName'
import categoryProducts from '../features/fetchProductsByCategory'

export const store = configureStore({
    reducer: {
        newProductsState: newProducts,
        categories: categories,
        productState: product,
        categoryProductsState: categoryProducts
    }
})

