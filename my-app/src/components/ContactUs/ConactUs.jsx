import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Tech Hardware Hub</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="contact-label">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="email" className="contact-label">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="message" className="contact-label">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="contact-input"
        />

        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Store Information</h2>
        <p><strong>Address:</strong></p>
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131155.16219030877!2d67.27993316378262!3d30.251415867193295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2d5ccb92413e9%3A0x1bcde8c12851b999!2sLoe%20Nekan!5e0!3m2!1sbg!2sbg!4v1739375830648!5m2!1sbg!2sbg"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "8px", marginTop: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p><strong>Phone:</strong> +359 888 123 456</p>
        <p><strong>Email:</strong> contact@techhub.bg</p>
      </div>
    </div>
  );
}
