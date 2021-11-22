import React from "react"
import './App.css';
import Cart from "./header-cart";
import Name from './header-name'

const Header = () => {
  return(
      <div className="app-header">
        <Name/>
        <Cart/>
      </div>
  );
}

export default Header;