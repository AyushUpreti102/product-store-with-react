import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from '../../reducers/productReducers'
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const { categories } = useSelector((state) => state.ProductStoreState)
  const dispatch = useDispatch();
  useEffect(() => {
    //Fetch Categories in productReducers in productReducers
    dispatch(fetchCategories())
  }, [])
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/store'} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>Store</Link>
        <form className="d-flex input-group w-50">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search for Categories"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn border border-2">
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </form>
        <Link to={'/login'}>
          <span className="input-group-text border-0" id="search-addon">
            <i className="fa-solid fa-user"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
};
