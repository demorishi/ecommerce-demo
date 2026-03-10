const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 80000,
    description: "Apple smartphone with advanced camera",
    image: "https://via.placeholder.com/250x220?text=iPhone+15"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 75000,
    description: "Samsung flagship mobile phone",
    image: "https://via.placeholder.com/250x220?text=Samsung+Galaxy+S24"
  },
  {
    id: 3,
    name: "Sony Headphones",
    category: "Accessories",
    price: 12000,
    description: "Noise cancelling wireless headphones",
    image: "https://via.placeholder.com/250x220?text=Sony+Headphones"
  },
  {
    id: 4,
    name: "Dell Laptop",
    category: "Laptop",
    price: 65000,
    description: "Lightweight laptop for office work",
    image: "https://via.placeholder.com/250x220?text=Dell+Laptop"
  },
  {
    id: 5,
    name: "Nike Shoes",
    category: "Fashion",
    price: 6000,
    description: "Comfortable running shoes",
    image: "https://via.placeholder.com/250x220?text=Nike+Shoes"
  },
  {
    id: 6,
    name: "Apple Watch",
    category: "Wearable",
    price: 32000,
    description: "Smart watch with fitness tracking",
    image: "https://via.placeholder.com/250x220?text=Apple+Watch"
  }
];

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Product service is running" });
});

// Get all products
app.get("/products", (req, res) => {
  res.json({
    success: true,
    count: products.length,
    products
  });
});

// Search products
app.get("/products/search", (req, res) => {
  const searchText = (req.query.q || "").toLowerCase().trim();

  if (!searchText) {
    return res.json({
      success: true,
      count: products.length,
      products
    });
  }

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
    );
  });

  res.json({
    success: true,
    count: filteredProducts.length,
    products: filteredProducts
  });
});

app.listen(PORT, () => {
  console.log(`Product service running on http://localhost:${PORT}`);
});