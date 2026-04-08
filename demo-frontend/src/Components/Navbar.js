import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Login</Link>
<<<<<<< HEAD
      <Link to="/signup">To Signup</Link>
=======
      <Link to="/signup">Signup</Link>
>>>>>>> 2a4150f19328a2efaa3cf7177fbdb4b055d920cd
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;