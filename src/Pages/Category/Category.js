import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import { fetchReleatedProducts } from '../../reducers/productReducers'

export const Category = () => {
    const { relatedProducts } = useSelector((state) => state.ProductStoreState)
    const { categoryName } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchReleatedProducts(categoryName.split('-').join(' ')))
    }, [])
    return (
        <>
            <h1 className='my-4 mx-4'>Explore {categoryName.split('-').join(' ')}</h1>
            <div className='row mx-3'>
                {relatedProducts.map((relatedProduct) => (
                    <div className='col col-12 col-sm-6 col-lg-3' key={relatedProduct.id}>
                        <Card key={relatedProduct.id} details={relatedProduct}></Card>
                    </div>
                ))}
            </div>
        </>
    )
}
