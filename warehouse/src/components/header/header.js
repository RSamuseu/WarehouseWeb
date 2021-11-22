import React from "react"

import Cart from "./header-cart";
import Name from './header-name'

import './header.css'

const Header = () => {
  return(
      <div className="app-header">
        <Name/>
        <Cart/>
      </div>
  );
}

export default Header;