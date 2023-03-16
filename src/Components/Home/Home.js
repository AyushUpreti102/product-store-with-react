import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewProducts } from "../../features/fetchNewProducts";
import { Card } from "../Card/Card";
import "./Home.css";
export const Home = () => {
  const newProducts = useSelector((state) => state.newProducts.newProducts);
  const dispatch = useDispatch();

  function fetchNewProducts() {
    dispatch(getNewProducts());
  }

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <>
      <h2>New Items</h2>
      <div className="products">
        {newProducts.map((product) => (
          <Card key={product.id} details={product} />
        ))}
      </div>
    </>
  );
};
