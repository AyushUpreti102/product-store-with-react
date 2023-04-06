import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewProductsList, fetchCategories } from '../../reducers/productReducers'
import { Card } from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import './Store.css'

export const Store = () => {
    const { newProducts, categories } = useSelector((state) => state.ProductStoreState)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        //Fetch New Product List in productReducers in productReducers
        dispatch(fetchNewProductsList())
    }, []);

    return (
        <>
            <div className="d-flex mx-4 gap-4 mb-4 overflow-auto scrollBar">
                {categories.map((category, index) => (
                    <button key={`${category}-${index}`} type="button" className="btn btn-light text-uppercase mt-4" onClick={() => navigate(`/category/${category}`)} style={{ fontSize: '12px' }}>{category}</button>
                ))}
            </div>
            <div className="px-2">
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                        {newProducts && newProducts.length ? newProducts.map((product) => (
                            <Card key={product.id} details={product} />
                        )) : 'No Products'}
                    </div>
                </div>
            </div>
        </>
    )
}
