import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductByName } from '../../features/fetchProductByName'
import { fetchReleatedProducts } from '../../features/fetchProductsByCategory'

export const Product = () => {
    const { product, relatedProducts } = useSelector((state) => {
        return {
            product: state.productState.product,
            relatedProducts: state.categoryProductsState.relatedProducts
        }
    })
    const dispatch = useDispatch()
    const { category, productID } = useParams()
    const fetchProductPage = function () {
        dispatch(fetchProductByName(productID))
        dispatch(fetchReleatedProducts(category.split('-').join(' ')))
    }

    useEffect(() => {
        fetchProductPage()
    }, [])
    return (
        <div className='product'>
            <div className="row">
                <div className="col">
                    <img src={product.image} width="100%" height="500px"></img>
                </div>
                {product ? <div className="col d-flex flex-column gap-4">
                    <h1>{product.title}</h1>
                    <span>{product.description}</span>
                    <span className='text-uppercase'>Category - {product.category}</span>
                    <span>${product.price}</span>
                </div> : 'No Such Product'}
            </div>
        </div>
    )
}
