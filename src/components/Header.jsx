import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartDropDown from "./ShoppingCartDropDown";

const Header = () => {
  return (
    <div className="header">
      <Link to="/cart">
        <ShoppingCartDropDown />
      </Link>
    </div>
  );
};

export default Header;
