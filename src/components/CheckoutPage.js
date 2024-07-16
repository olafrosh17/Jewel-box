import React from 'react';
import ring1 from '../images/rectangle-1.png';
import ring2 from '../images/rectangle-1b.png';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <Link to="/cart" className="back-link">Back</Link>
        <h1 className="logo">JewelBOX</h1>
      </header>
      <div className="checkout-steps">
        <span>1 Order Summary</span>
        <span>2 Shipping</span>
        <span>3 Payment</span>
      </div>
      <div className="order-summary">
        <h2>2 Items</h2>
        <div className="item">
          <img src={ring1} alt="Persian Bubble Ring" />
          <div>
            <p>₦150,000<br/>Persian Bubble Ring<br/>Size 8, Gold Vermeil</p>
            <p>Qty: 1</p>
          </div>
        </div>
        <div className="item">
          <img src={ring2} alt="Set of 3 Gold Rings with Pearl" />
          <div>
            <p>₦800,000<br/>Set of 3 Gold Rings with Pearl<br/>Size 10, 18ct Rose Gold Vermeil</p>
            <p>Qty: 1</p>
          </div>
        </div>
        <div className="total">
          <p>Sub-Total</p>
          <p>₦950,000</p>
        </div>
        <div className="delivery-fee">
          <p>Delivery Fee</p>
          <p>Free</p>
        </div>
        <div className="total-to-pay">
          <p>TOTAL TO PAY</p>
          <p>₦950,000</p>
        </div>
      </div>
      <div className="shipping-options">
        <h2>1. Shipping</h2>
        <div>
          <input type="radio" name="shipping" id="express" />
          <label htmlFor="express">Express Shipping (Delivery in 2-4 business days) - ₦18,000</label>
        </div>
        <div>
          <input type="radio" name="shipping" id="standard" />
          <label htmlFor="standard">Standard Shipping (Delivery in 2 weeks) - Free</label>
        </div>
      </div>
      <div className="payment-options">
        <h2>2. Payment</h2>
        <div>
          <input type="radio" name="payment" id="card" />
          <label htmlFor="card">Credit or Debit card</label>
        </div>
        <div>
          <input type="radio" name="payment" id="bank" />
          <label htmlFor="bank">Bank Transfer</label>
        </div>
        <div>
          <input type="radio" name="payment" id="wallet" />
          <label htmlFor="wallet">JewelBOX Wallet Balance</label>
        </div>
      </div>
      <div className="terms">
        <p>By placing this order, you agree to our <a href="/terms">Terms of Service</a> and understand our <a href="/privacy">Privacy Policy</a></p>
      </div>
      <button className="confirm-order">Confirm Order</button>
    </div>
  );
};

export default CheckoutPage;
