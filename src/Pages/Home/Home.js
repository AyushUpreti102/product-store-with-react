import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewProductsList } from '../../reducers/productReducers'
import { Card } from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { newProducts, categories } = useSelector((state) => state.ProductStoreState)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const openCategoryPage = (category) => {
    navigate(`/category/${category.split(' ').join('-')}`)
  }

  useEffect(() => {
    dispatch(fetchNewProductsList())
  }, []);

  return (
    <>
      <div className="d-flex mx-4 gap-4 mb-4">
        {categories.map((category, index) => (
          <div key={`${category}-${index}`}>
            <button key={`${category}-${index}`} type="button" className="btn btn-light text-uppercase mt-4" onClick={() => openCategoryPage(category)}>{category}</button>
          </div>
        ))}
      </div><hr></hr>
      <h2 className="mx-4">New Items</h2><hr></hr>
      <div className="row mx-3">
        {newProducts && newProducts.length ? newProducts.map((product) => (
          <div className="col col-lg-3 col-sm-6 col-12" key={product.id}>
            <Card key={product.id} details={product} />
          </div>
        )) : 'No Products'}
      </div>
    </>
  );
};
