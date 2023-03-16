import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <div className="navbar-brand">
          Products
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
            <div className="nav-link">
              About
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
