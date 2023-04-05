import React from "react";

export const Navbar = () => {
  const style = {
    'zIndex': '999'
  }

  return (
    <nav className="navbar navbar-light w-100 position-absolute top-0" style={style}>
      <div className="d-flex align-items-center">
        <span className="navbar-brand mb-0 h1 mx-4">Store</span>
      </div>
      <button type="button" className="btn" >
        <img src='https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png' height="30px"></img>
      </button>
    </nav>
  );
};

//onClick={() => navigate('/login')}
