import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewProductsList } from '../../features/fetchNewProducts'
import { Card } from "../../Components/Card/Card";
import "./Home.css";
export const Home = () => {
  const newProducts = useSelector((state) => state.newProductsState.newProducts);
  const dispatch = useDispatch();

  const fetchNewProducts = function () {
    dispatch(fetchNewProductsList())
  }

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <>
      <h2 className="mx-4">New Items</h2><hr></hr>
      <div className="products">
        {newProducts && newProducts.length ? newProducts.map((product) => (
          <Card key={product.id} details={product} />
        )) : 'No Products'}
      </div>
    </>
  );
};
