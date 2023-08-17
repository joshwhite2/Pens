import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const Nav = () => {
  return (
    <aside className="nav">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <br />

      <div className="links">
        <Link to="/products">Products</Link>
        <br />
        <Link to="/cart">Cart</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    </aside>
  );
};

export default Nav;
