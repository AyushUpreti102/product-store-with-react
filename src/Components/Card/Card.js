import React from "react";
import './Card.css'

export const Card = ({details}) => {
  return (
    <>
      <div className="card">
        <img src={details.image} className="card-img-top cardImage rounded" alt="productImage" />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <span>${details.price}</span>
        </div>
      </div>
    </>
  );
};
