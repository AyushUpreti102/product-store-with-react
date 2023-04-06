import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewProductsList, fetchCategories } from '../../reducers/productReducers'
import { Card } from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import './Store.css'

export const Store = () => {
    const { newProducts, categories } = useSelector((state) => state.ProductStoreState)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [page, setPage] = useState(0)

    const paginate = function (action) {
        if (page >= 0 && page <= 9) {
            console.log(action);
            action === 'previous' ? setPage(page - 1) : setPage(page + 1)
        }
    }

    useEffect(() => {
        //Fetch New Product List in productReducers in productReducers
        dispatch(fetchNewProductsList(page))
    }, [page]);

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
            </div>{page}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" role="button" onClick={() => paginate('previous')}>
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item" role="button" onClick={() => setPage(0)}><span className="page-link">1</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(1)}><span className="page-link">2</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(2)}><span className="page-link">3</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(3)}><span className="page-link">4</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(4)}><span className="page-link">5</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(5)}><span className="page-link">6</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(6)}><span className="page-link">7</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(7)}><span className="page-link">8</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(8)}><span className="page-link">9</span></li>
                    <li className="page-item" role="button" onClick={() => setPage(9)}><span className="page-link">10</span></li>
                    <li className="page-item" role="button" onClick={() => paginate('next')}>
                        <span className="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}
