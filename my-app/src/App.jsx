import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./components/products/ProductsPage";
import CartPage from "./components/cart/CartPage";
import HomePage from "./components/homepage/HomePage";
import ContactPage from "./components/ContactUs/ConactUs";
import AboutPage from "./components/AboutPage/AboutPage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


export default function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Navigation Bar */}
      <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/aboutus" element ={<AboutPage/>}/>
        </Routes>
      </div>
       {/* Footer */}
    <Footer/>
    </Router>
  
   
    
  );
}
