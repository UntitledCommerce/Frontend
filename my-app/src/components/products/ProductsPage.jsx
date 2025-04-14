import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProductPage.css'

// Dummy product data
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Продукт ${i + 1}`,
  category: i % 2 === 0 ? "Категория A" : "Категория B",
  price: parseFloat((10 + i * 3).toFixed(2)),
  image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
}));

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    );
  });

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} беше добавен в количката!`);
  };

  return (
    <div className="product-page">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Търси продукти..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Всички</option>
          <option value="Категория A">Категория A</option>
          <option value="Категория B">Категория B</option>
        </select>
        <Link to="/cart" className="cart-link">
          🛒 Виж количката
        </Link>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <div className="flex justify-between items-center">
              <span className="price">{product.price.toFixed(2)} лв</span>
              <button onClick={() => addToCart(product)}>Добави</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
