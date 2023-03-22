import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'

export const Card = ({details}) => {
  const navigate = useNavigate()

  const changeRoute = () => {
    navigate(`/product/${details.category.split(' ').join('-')}/${details.id}`)
  }

  return (
    <>
      <div className="card" role='button' onClick={() => changeRoute()}>
        <img src={details.image} className="card-img-top rounded" height="250px" width="100%" alt="productImage" />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <span>${details.price}</span>
        </div>
      </div>
    </>
  );
};
