import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
          <div className="logo">TechZone</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        </div>
    );
}

export default Navbar;
