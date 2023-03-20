import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from '../../features/fetchCategories'
// import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  // const navigate = useNavigate()
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()
  const fetchCategoriesList = function () {
    dispatch(fetchCategories())
  }
  // const changeRoute = (category) => {
  //   navigate(`/category/${category}`)
  // }
  useEffect(() => {
    fetchCategoriesList()
  }, [])
  return (
    <nav className="navbar navbar-expand-lg bg-light bg-gradient mb-2">
      <div className="container-fluid">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsA3hoHbhVg2rur76WEOAi8Wb80d5w_92j5yvkNCQOQ&s" height="30px"></img>
        <div className="navbar-brand mx-3">
          Store
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {categories.map((category) => (
              <div className="nav-link text-uppercase mx-2" role="button" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
