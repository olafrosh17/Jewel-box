import React from 'react';
import './CartPage.css';

const cartItems = [
  { id: 1, name: 'Persian Bubble Ring', price: '₦150,000', size: '8, Gold Vermeil', quantity: 1, image: 'path-to-image' },
  { id: 2, name: 'Set of 3 Gold Rings with Pearl', price: '₦800,000', size: '7, Gold & Pearl', quantity: 1, image: 'path-to-image' },
];

const recommendedItems = [
  { id: 1, name: 'Scadic Ring Case', price: '₦20,000', image: 'path-to-image' },
  { id: 2, name: 'Ring Dish', price: '₦10,000', image: 'path-to-image' },
  { id: 3, name: 'Ring Holder', price: '₦36,000', image: 'path-to-image' },
  { id: 4, name: 'Formal Ring Case', price: '₦25,000', image: 'path-to-image' },
  { id: 5, name: 'Antique Jewel Box', price: '₦80,000', image: 'path-to-image' },
  { id: 6, name: 'Ring Bowl', price: '₦9,800', image: 'path-to-image' },
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
          <p>Sub - Total: ₦{subTotal.toLocaleString()}</p>
          <p>Delivery Fee: Free</p>
          <p className="free-delivery">FREE STANDARD DELIVERY</p>
          <p>Offer lasts until the 31st of July</p>
          <button className="checkout-button">CHECKOUT</button>
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
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Help</h3>
            <ul>
              <li>Shipping</li>
              <li>Returns & Exchanges</li>
              <li>Warranty</li>
              <li>FAQs</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Membership</li>
              <li>Style Guide</li>
              <li>Product Care</li>
              <li>Product Authentication</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About JewelBOX</h3>
            <ul>
              <li>Who we are</li>
              <li>Where we are</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Phone: +234 700 100 0000</p>
            <p>Email: help@jewelbox.com</p>
          </div>
        </div>
        <div className="footer-social">
          <span>JewelBOX</span>
          <div className="social-icons">
            <a href="#"><img src="path-to-twitter-icon" alt="Twitter" /></a>
            <a href="#"><img src="path-to-facebook-icon" alt="Facebook" /></a>
            <a href="#"><img src="path-to-instagram-icon" alt="Instagram" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
