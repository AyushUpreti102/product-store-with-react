import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'

export const Card = ({details}) => {
  const navigate = useNavigate()

  //Navigate to product page
  const changeRoute = () => {
    navigate(`/product/${details.category.split(' ').join('-')}/${details.id}`)
  }

  return (
    <>
      <div className="card h-100 shadow-sm" onClick={changeRoute}>
        <img src={details.image} className="card-img-top card-image" alt="product image" />
        <div className="card-body">
          <div className="clearfix mb-3">
            <span className="float-start badge rounded-pill bg-primary">{details.category}</span>
            <span className="float-end price-hp">${details.price}</span>
          </div>
          <h5 className="card-title">{details.title}</h5>
        </div>
      </div>
    </>
  );
};
