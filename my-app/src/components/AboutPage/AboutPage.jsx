import React, { useRef, useState, useEffect } from 'react';
import "./AboutPage.css";
import Navbar from '../navbar/navbar';  
import Footer from '../footer/footer';

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Navigation Bar */}
      <h1>About Us</h1>
      <p>
        The staff of <strong>Acme.inc</strong> is made of people who have a passion for building,
        maintaining, and repairing personal computers and other electronic devices.
        We also sell gaming computers, business computers, computer hardware, tablets,
        mobile phones, server equipment, software, and services.
      </p>

      <h1>What Is Our Goal?</h1>
      <p>
        Our goal is to keep up with the latest technologies and remain as compliant as possible,
        while providing the help necessary to extend the life of every product and maintain its integrity.
      </p>

      <h1>Why Trust Us?</h1>
      <p>
        The staff of Acme.inc strives to be the best in the country. We have high standards and tight tolerances
        for everyone in the company. Each team member is handpicked and has at least 5 years of experience.
      </p>

      <h1>We Have a Physical Store!</h1>
      <p>
        Not a fan of shopping through a screen?{" "}
        <a href="/contact" className="about-link">
          Contact us here
        </a>{" "}
        and our highly trained professionals will help you test and choose the perfect products for your needs.
      </p>
    </div>
  );
}
