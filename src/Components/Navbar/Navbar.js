import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from '../../reducers/productReducers'

export const Navbar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="d-flex align-items-center">
        <img src="https://www.clipartmax.com/png/middle/353-3536273_svg-royalty-free-stock-stores-icon-png-svg-grocery-store-icon-png.png" height="30px" className="mx-2"></img>
        <span className="navbar-brand mb-0 h1">Store</span>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height="30px" className="mx-4"></img>
    </nav>
  );
};
