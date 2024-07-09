import React from 'react';
import './Header.css';
import logo from '../images/JewelBOX.png'; // Adjust the path to your logo
import searchIcon from '../images/search.svg'; // Adjust the path to your search icon
import userIcon from '../images/person-circle.svg'; // Adjust the path to your user icon
import cartIcon from '../images/state-bag-icon-added.svg'; // Adjust the path to your cart icon
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="JewelBOX Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li>NEW ARRIVALS</li>
            <li>BEST SELLERS</li>
            <li>EARRINGS</li>
            <li>RINGS</li>
            <li>NECKLACES</li>
            <li>BRACELETS</li>
          </ul>
        </nav>
        <div className="header-icons">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={userIcon} alt="User" className="icon" />
          <Link to="/cart" className="shopping-bag">
            <img src={cartIcon} alt="Shopping Bag" className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
