import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/shopping-cart-24.ico'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
          <div className="logo">TechZone</div>
          <ul className="nav-links">
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/products">Products</NavLink></li>
            <li><NavLink to  ="/aboutus">About Us</NavLink></li>
            <li><NavLink to ="/contact">Contact</NavLink></li>
            <li><NavLink to ="/cart"><img src= {cartIcon} alt="Cart" className="cart-icon" /></NavLink></li>
          </ul>
        </nav>
        </div>
    );
}

export default Navbar;
