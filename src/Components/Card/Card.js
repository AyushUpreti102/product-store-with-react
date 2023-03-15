import React from "react";
import './Card.css'

export const Card = ({details}) => {
  return (
    <>
      <div className="card">
        <img src={details.image} class="card-img-top cardImage" alt="productImage" /><hr></hr>
        <div class="card-body">
          <h5 class="card-title">{details.title}</h5><hr></hr>
          <span>Category : {details.category}</span><hr></hr>
          <p class="card-text">
            {details.description}
          </p>
        </div>
      </div>
    </>
  );
};
