// src/components/Home.js
import React from 'react';
import heroimage from '../images/frame-261.jpg'; // Adjust the path as necessary
import ProductGrid from './ProductGrid';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <img src={heroimage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>EXCLUSIVE: SHOP THE LATEST NEW TRENDS</h1>
          <button className="start-shopping">START SHOPPING</button>
        </div>
      </section>
      <h2>Checkout our latest New Arrivals</h2>
      <p>Below are our newest products, want something new?</p>
      <div className="filters">
        <button>All</button>
        <button>Earrings</button>
        <button>Rings</button>
        <button>Necklaces</button>
        <button>Bracelets</button>
        <select>
          <option value="recommended">Recommended</option>
        </select>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Home;