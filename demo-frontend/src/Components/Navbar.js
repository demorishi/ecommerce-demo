import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;