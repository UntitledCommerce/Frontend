import React from 'react';
import Navbar from '../components/navbar/navbar';
function App() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <Navbar /> 
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Welcome to TechZone</h1>
            <p>Your one-stop shop for computers and computer parts.</p>
            <button className="cta-button">Shop Now</button>
          </div>
        </section>
  
        {/* Featured Products Section */}
        <section id="products" className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-cards">
            <div className="card">
              <img src="https://via.placeholder.com/200" alt="Product 1" />
              <h3>Gaming PC</h3>
              <p>High-performance gaming desktops for the ultimate experience.</p>
              <button className="product-button">View Details</button>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/200" alt="Product 2" />
              <h3>Graphics Cards</h3>
              <p>Top-tier GPUs for gaming and professional work.</p>
              <button className="product-button">View Details</button>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/200" alt="Product 3" />
              <h3>SSD Storage</h3>
              <p>Blazing-fast SSDs for improved performance.</p>
              <button className="product-button">View Details</button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2023 TechZone. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default App;