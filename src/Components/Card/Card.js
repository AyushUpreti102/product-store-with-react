import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export const Card = ({ details }) => {
  const style = {
    backgroundImage: `url(${details.images[0]})`,
    backgroundRepeat: 'no-repeat',
    height: '200px',
    backgroundPositionX: 'center',
    backgroundSize: 'contain'
  }
  return (
    <Link to={`/product/${details.category.split(' ').join('-')}/${details.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="card shadow-0 border rounded-3 mb-2">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                <div className="w-100" style={style}></div>
                <div className="hover-overlay">
                  <div className="mask" style={{ backgroundColor: `rgba(253, 253, 253, 0.15)` }}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <h5>{details.title}</h5>
              <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span>310</span>
              </div>
              <div className="mt-1 mb-0 text-muted small">
                Brand: {details.brand}
              </div>
              <p className="text-truncate mb-4 mb-md-0">
                {details.description}
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">${Math.trunc(details.price - (details.price * details.discountPercentage / 100))}</h4>
                {details.discountPercentage ? <span className="text-danger"><s>${details.price}</s></span> : ''}
              </div>
              <h6 className="text-success">Free shipping</h6>
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm" type="button">Details</button>
                <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
