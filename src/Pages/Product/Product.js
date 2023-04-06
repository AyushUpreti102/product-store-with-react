import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductByID } from '../../reducers/productReducers'
import { fetchReleatedProducts } from '../../reducers/productReducers'
import './Product.css'
import { Card } from '../../Components/Card/Card'

export const Product = () => {
    const { product, relatedProducts } = useSelector((state) => state.ProductStoreState)
    const dispatch = useDispatch()
    const { category, productID } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [index, setIndex] = useState(0)

    //Will work on first render and when the value of productID changes
    useEffect(() => {
        //Fetch Product By Name in productReducers
        dispatch(fetchProductByID(productID))

        //Fetch Related products by category in productReducers
        dispatch(fetchReleatedProducts(category))
    }, [productID])

    return (
        <div className='my-5'>
            <div className="border p-3 bg-white">
                <div className="row m-0">
                    <div className="col-lg-4 left-side-product-box pb-3" style={{ marginBottom: '100px' }}>
                        <img src={product.images ? product.images[index] : ''} alt={`${product.title}-image`} className="border p-3 h-100 w-100" />
                        <div className="sub-img">
                            {product.images ? product.images.map((image, index) => {
                                if (index < 3) {
                                    return <img key={`${image}/images`} src={image} className="border p-2" onClick={() => setIndex(index)} />
                                }
                            }) : 'No Extra Images'}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="right-side-pro-detail border p-3 m-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="m-0 p-0">{product.title}</p>
                                </div>
                                <div className="col-lg-12">
                                    <p className="m-0 p-0 price-pro">${product.price}</p>
                                    <hr className="p-0 m-0" />
                                </div>
                                <div className="col-lg-12 pt-2">
                                    <h5>Product Detail</h5>
                                    <span>{product.description}</span>
                                    <hr className="m-0 pt-2 mt-2" />
                                </div>
                                <div className="col-lg-12">
                                    <p className="tag-section"><strong>Category : </strong><a href="#">{product.category}</a></p>
                                </div>
                                <div className="col-lg-12">
                                    <h6>Quantity :</h6>
                                    <input type="number" className="form-control text-center w-100" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="row">
                                        <div className="col-lg-6 pb-2">
                                            <span className="btn btn-danger w-100">Add To Cart</span>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="btn btn-success w-100">Shop Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center pt-3">
                        <h4>More Products</h4>
                    </div>
                </div>
                <div className="row mt-3 p-0 text-center pro-box-section">
                    {relatedProducts.map((relatedProduct) => {
                        if (product.title !== relatedProduct.title) {
                            return (
                                <div key={relatedProduct.id} className="col-lg-3 col-sm-6 pb-2">
                                    <Card key={relatedProduct.id} details={relatedProduct}></Card>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
