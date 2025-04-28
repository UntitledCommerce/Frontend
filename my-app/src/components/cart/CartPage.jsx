import React, { useState, useEffect } from 'react';
import './CartPage.css';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({ name: "", address: "", phone: "", payment: "cash" });
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
	const order = {
        id: Math.floor(Math.random() * 1000000),
        items: [...cartItems],
        name: form.name,
        company: "C",
        phone: form.phone,
        email: "client@heapforge.com",
        address_l1: form.address,
        address_l2: "C",
        city: "Qgodovo",
        province: "Plovdiv",
        country: "Bulgaria",
        courier: "123",
        tracking: "123",
        delivery_message: "Please leave at front door",
        status: "Pending"
    };

    fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });

    alert(`Поръчка приета!\n\nИме: ${form.name}\nАдрес: ${form.address}\nТелефон: ${form.phone}\nПлащане: ${form.payment}`);
    localStorage.removeItem("cart");
    setCartItems([]);
    setForm({ name: "", address: "", phone: "", payment: "cash" });
  };

  const handleRemove = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Твоята количка</h2>

      {cartItems.length === 0 && !orderSuccess ? (
        <p className="empty-message">Няма добавени продукти.</p>
      ) : orderSuccess ? (
        <p className="order-success">✅ Благодарим за поръчката!</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, idx) => (
              <li key={item.id || idx} className="cart-item">
                <div className="item-info">
                  <span>{item.name} </span>
                  <span>{parseFloat(item.price).toFixed(2)} лв</span>
                </div>
                <button className="remove-button" onClick={() => handleRemove(idx)}>🗑 Премахни</button>
              </li>
            ))}
          </ul>

          <div className="cart-total">Общо: {parseFloat(total).toFixed(2)} лв</div>

          <form onSubmit={handleSubmit} className="order-form" aria-label="Форма за поръчка">
            <input
              type="text"
              placeholder="Име"
              className="order-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Адрес"
              className="order-input"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="order-input"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />

            <fieldset className="payment-options">
              <legend>Метод на плащане:</legend>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={form.payment === "cash"}
                  onChange={(e) => setForm({ ...form, payment: e.target.value })}
                /> В брой
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={(e) => setForm({ ...form, payment: e.target.value })}
                /> С карта
              </label>
            </fieldset>

            <button type="submit" className="submit-button">
              ✅ Потвърди поръчката
            </button>
          </form>
        </>
      )}
    </div>
  );
}
