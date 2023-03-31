import React from "react";
import { LoginModal } from '../Modal/LoginModal'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="d-flex align-items-center">
        <img src="https://www.clipartmax.com/png/middle/353-3536273_svg-royalty-free-stock-stores-icon-png-svg-grocery-store-icon-png.png" height="30px" className="mx-2"></img>
        <span className="navbar-brand mb-0 h1">Store</span>
      </div>
      <LoginModal />
    </nav>
  );
};
