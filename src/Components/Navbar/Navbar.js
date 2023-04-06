import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from '../../reducers/productReducers'
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const { categories } = useSelector((state) => state.ProductStoreState)
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    //Fetch Categories in productReducers in productReducers
    dispatch(fetchCategories())
  }, [])

  useEffect(() => {
    //Shows search suggestion
    if (search.length) {
      setSuggestions(categories.filter((category) => {
        return category.slice(0, 4).includes(search)
      }))
    }
    else {
      setSuggestions([]);
    }

  }, [search])

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/store'} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>Store</Link>
        <div className="w-50 position-relative">
          <form className="d-flex input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search for Categories"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="button" className="btn border border-2">
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </form>
          {suggestions.length ? <div className="suggestions border border-1 position-absolute p-2 bg-white rounded" style={{ width: '87%', zIndex: '999' }}>
            {suggestions.map((suggestion) => (
              <div key={suggestion} role="button" onClick={() => setSearch(suggestion)}>{suggestion}</div>
            ))}
          </div> : ''}
        </div>
        <Link to={'/login'}>
          <span className="input-group-text border-0" id="search-addon">
            <i className="fa-solid fa-user"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
};
