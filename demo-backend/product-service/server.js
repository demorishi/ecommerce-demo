const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    category: "Mobile",
    price: 80000,
    description: "Apple smartphone with advanced camera",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/iphone.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 75000,
    description: "Samsung flagship mobile phone",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/samsung galaxy.jpg"
  },
  {
    id: 3,
    name: "Sony Headphones",
    category: "Accessories",
    price: 12000,
    description: "Noise cancelling wireless headphones",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/headphones.jpg"
  },
  {
    id: 4,
    name: "Dell Laptop",
    category: "Laptop",
    price: 65000,
    description: "Lightweight laptop for office work",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/laptop.jpg"
  },
  {
    id: 5,
    name: "Nike Shoes",
    category: "Fashion",
    price: 6000,
    description: "Comfortable running shoes",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/shoes.jpg"
  },
  {
    id: 6,
    name: "Apple Watch",
    category: "Wearable",
    price: 32000,
    description: "Smart watch with fitness tracking",
    image: "http://d2yeqv62o6h99f.cloudfront.net/images/apple watch.jpg"
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