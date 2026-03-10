import React, { useEffect, useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadAllProducts = async () => {
    setError("");
    setMessage("");

    try {
      const response = await fetch("http://localhost:5002/products");
      const data = await response.json();

      if (!response.ok) {
        setError("Unable to fetch products");
        return;
      }

      setProducts(data.products || []);
      setMessage(`${data.count || 0} product(s) found`);
    } catch (err) {
      setError("Unable to connect to product service");
    }
  };

  const handleSearch = async () => {
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:5002/products/search?q=${encodeURIComponent(search)}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError("Search failed");
        return;
      }

      setProducts(data.products || []);
      setMessage(`${data.count || 0} product(s) found`);
    } catch (err) {
      setError("Unable to connect to product service");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div className="product-page">
      <div className="product-search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="product-content">
        <h2 className="product-title">Products</h2>

        {message && <p className="success-text">{message}</p>}
        {error && <p className="error-text">{error}</p>}

        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-product-image"
                  />
                </div>

                <div className="product-card-body">
                  <h3 className="product-product-title">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">₹{product.price.toLocaleString()}</p>
                  <button className="product-btn">Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            !error && <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;