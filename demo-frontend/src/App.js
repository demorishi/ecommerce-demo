import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./UI/Login";
import Signup from "./UI/Signup";
import Products from "./UI/Products";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;