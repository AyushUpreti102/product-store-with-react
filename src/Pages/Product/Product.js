import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { fetchProductByName } from '../../reducers/productReducers'
import { fetchReleatedProducts } from '../../reducers/productReducers'

export const Product = () => {
    const { product, relatedProducts } = useSelector((state) => state.ProductStoreState)
    const dispatch = useDispatch()
    const { category, productID } = useParams()

    useEffect(() => {
        dispatch(fetchProductByName(productID))
        dispatch(fetchReleatedProducts(category.split('-').join(' ')))
    }, [])

    return (
        <div className='product mx-3'>
            <div className="row mt-4">
                <div className="col col-12 col-lg-6 col-sm-12">
                    <img src={product.image} width="100%" height="500px"></img>
                </div>
                {product ? <div className="col d-flex flex-column gap-4">
                    <h1>{product.title}</h1>
                    <span>{product.description}</span>
                    <span className='text-uppercase'>Category - {product.category}</span>
                    {/* {product.rating.rate ? <span>Rating: {product.rating.rate} / 5</span> : ''} */}
                    <span>${product.price}</span>
                </div> : 'No Such Product'}
            </div>
            <h1 className='my-4'>Related products to {product.category}</h1>
            <div className='row'>
                {relatedProducts.map((relatedProduct) => {
                    if (product.title !== relatedProduct.title) {
                        return (
                            <div className='col col-12 col-sm-6 col-lg-3' key={relatedProduct.id}>
                                <Card details={relatedProduct}></Card>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
