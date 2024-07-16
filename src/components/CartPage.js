import React from 'react';
import './CartPage.css';
import ring1 from '../images/rectangle-1.png';
import ring2 from '../images/rectangle-1b.png';
import ring3 from '../images/rectangle-2.png';
import ring4 from '../images/rectangle-3.png';
import ring5 from '../images/rectangle-4.png';
import ring6 from '../images/rectangle-4b.png';
import ring7 from '../images/rectangle-4c.png';
import ring8 from '../images/rectangle-4d.png';
import { Link } from 'react-router-dom';

const cartItems = [
  { id: 1, name: 'Persian Bubble Ring', price: '₦150,000', size: '8, Gold Vermeil', quantity: 1, image: ring1 },
  { id: 2, name: 'Set of 3 Gold Rings with Pearl', price: '₦800,000', size: '7, Gold & Pearl', quantity: 1, image: ring2 },
];

const recommendedItems = [
  { id: 1, name: 'Scadic Ring Case', price: '₦20,000', image: ring3 },
  { id: 2, name: 'Ring Dish', price: '₦10,000', image: ring4 },
  { id: 3, name: 'Ring Holder', price: '₦36,000', image: ring5 },
  { id: 4, name: 'Formal Ring Case', price: '₦25,000', image: ring6 },
  { id: 5, name: 'Antique Jewel Box', price: '₦80,000', image: ring7 },
  { id: 6, name: 'Ring Bowl', price: '₦9,800', image: ring8 },
];

const CartPage = () => {
  const subTotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₦', '').replace(',', '')), 0);

  return (
    <div className="cart-page">
      <header>
        <div className="logo">
          <h1>JewelBOX</h1>
        </div>
        <nav>
          <ul>
            <li>NEW ARRIVALS</li>
            <li>BEST SELLERS</li>
            <li>EARRINGS</li>
            <li>RINGS</li>
            <li>NECKLACES</li>
            <li>BRACELETS</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="cart">
          <h2>Your Bag</h2>
          <p>{cartItems.length} items</p>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>{item.size}</p>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button>-</button>
                      <input type="number" value={item.quantity} readOnly />
                      <button>+</button>
                    </div>
                    <button className="save-for-later">Save for later</button>
                    <button className="remove-item">Remove item</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="summary">
          <h2>Total</h2>
          <p>Sub-Total: ₦{subTotal.toLocaleString()}</p>
          <p>Delivery Fee: Free</p>
          <p className="free-delivery">FREE STANDARD DELIVERY</p>
          <p>Offer lasts until the 31st of July</p>
          <Link to="/checkout" className="checkout-button">CHECKOUT</Link>
        </section>
        <section className="recommended">
          <h2>Items you may need</h2>
          <div className="recommended-items">
            {recommendedItems.map(item => (
              <div key={item.id} className="recommended-item">
                <img src={item.image} alt={item.name} className="recommended-item-image" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartPage;
