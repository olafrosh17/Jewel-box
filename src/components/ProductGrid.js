import React from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import image1 from '../images/frame-29.png'
import image2 from '../images/frame-30.png'
import image3 from '../images/frame-31.png'
import image4 from '../images/frame-32.png'
import image5 from '../images/frame-33.png'
import image6 from '../images/frame-33b.png'
import image7 from '../images/frame-34.png'
import image8 from '../images/frame-34b.png'
import image9 from '../images/frame-35.png'
import image10 from '../images/frame-35b.png'
import image11 from '../images/frame-36.png'
import image12 from '../images/frame-36b.png'


const products = [
  { id: 1, name: 'Ragnar rock rings (Gold)', price: '₦ 70,000.00', image: image1},
  { id: 2, name: 'Emerald Cut vvs Band Ring', price: '₦ 120,000.00', image: image2 },
  { id: 3, name: 'Thanos Rings (white Gold)', price: '₦ 10,999.00', image: image3 },
  { id: 4, name: 'Persian Bubble Ring ( Gold )', price: '₦ 5,599.00', image: image4 },
  { id: 5, name: 'Bishop Style Rings ( Gold ) ', price: '₦ 24,000.00 ', image: image5 },
  { id: 6, name: 'Blue Diamond Wedding Ring', price: '₦400,000.00 ', image: image6 },
  { id: 7, name: 'Princess Cut Diamond Wedding Ring', price: '₦600,000.00', image: image7 },
  { id: 8, name: '4 Set Gold Mix Rings', price: '₦ 70,000.00', image: image8 },
  { id: 9, name: 'Ripple Set Ring ( Gold )', price: '₦ 12,599.00 ', image: image9 },
  { id: 10, name: 'Queen’s Cut Diamond Wedding Ring', price: '₦ 00,000.00', image: image10 },
  { id: 11, name: '3 Set Pharaoh Rings ( Gold )', price: '₦  69,999.00', image: image11 },
  { id: 12, name: 'Greek Style Sliver Band Rings', price: '₦ 30,000.00', image: image12 },
  // add more products as needed
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button className={product.inBag ? 'btn added' : 'btn'}>{product.inBag ? 'ADDED' : 'ADD TO BAG'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;