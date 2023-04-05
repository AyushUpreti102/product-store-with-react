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
                    <button key={`${category}-${index}`} type="button" className="btn btn-light text-uppercase mt-4" onClick={() => navigate(`/category/${category.split(' ').join('-')}`)} style={{ fontSize: '12px' }}>{category}</button>
                ))}
            </div>
            <div className="row mx-3">
                {newProducts && newProducts.length ? newProducts.map((product) => (
                    <div className="col col-lg-3 col-sm-6 col-12 mb-4" key={product.id}>
                        <Card key={product.id} details={product} />
                    </div>
                )) : 'No Products'}
            </div>
        </>
    )
}
